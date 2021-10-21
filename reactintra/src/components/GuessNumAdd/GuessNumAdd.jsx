import React, {Component, useState} from "react";
import GuessNumService from "../../services/GuessNumService";
import GuessNum from "../../model/GuessNum";
import Swal from "sweetalert2";

const min = 1;
const max = 6;

export default class GuessNumAdd extends Component {
    constructor(props) {
        super(props);
        this.service = GuessNumService;
        this.state = {
            name: '',
            userGuess: '',
            randNum: this._generateRandNum()
        }
    }

    _resetState(){
        this.setState({
            userGuess: '',
            randNum: this._generateRandNum()
        })
    }

    _generateRandNum(){
        return Math.floor(min + Math.random() * (max - min));
    }

    addGuessNum = () => {
        const {name, userGuess, randNum} = this.state;
        const guess = new GuessNum(name, userGuess, randNum);
        this.service.createGuessNum(guess).then(value => {
            if (value){
                Swal.fire({
                    title: value.randNum,
                    icon: value.randNum === value.userGuess ? 'success' : 'error'}).then();
            }
            this._resetState();
        });
    }

    handleChange = input => e => {
        e.preventDefault()
        this.setState({[input]: e.target.value});
    }

    render() {
        return (
            <div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Votre Nom</label>
                        <div>
                            <div className="input-group">
                                <input name="name" placeholder="Jordan" className="form-control" type="text"
                                       value={this.state.name} onChange={this.handleChange('name')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label>Votre Guess</label>
                        <div>
                            <div className="input-group">
                                <input name="userGuess" placeholder="1 - 6" className="form-control" type="number"
                                       value={this.state.userGuess} onChange={this.handleChange('userGuess')}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group text-center">
                    <label/>
                    <div>
                        <button className="btn btn-primary" type={"button"} onClick={this.addGuessNum}>Coup de de</button>
                    </div>
                </div>
            </div>
        );
    }
}