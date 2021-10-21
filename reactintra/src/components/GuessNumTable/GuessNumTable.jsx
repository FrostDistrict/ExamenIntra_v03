import React, {Component} from "react";
import GuessNumService from '../../services/GuessNumService'

export default class GuessNumTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: []
        }
        this._getAllGuesses();
    }

    _getAllGuesses() {
        GuessNumService.getAllGuesses()
            .then(guesses => this.setState({guesses}));
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Guess Utilisateur</th>
                            <th scope="col">Numero Random</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.guesses.map((guess, index) =>
                          <tr>
                              <td>{guess.name}</td>
                              <td>{guess.userGuess}</td>
                              <td>{guess.randNum}</td>
                          </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}