import {methods, requestInit, urlBackend} from "./ServiceUtil";
import {swalErr, toast} from "../utility";

class GuessNumService {

    async createGuessNum(guessNum) {
        const response = await fetch(`${urlBackend}/guess/create`, requestInit(methods.POST, guessNum));
        return await response.json().then(value => {
                if (value.message) {
                    swalErr(value.message).fire({}).then()
                    return
                }
                toast.fire({title: "Guess ajouté!"}).then()
                return value
            },
            err => {
                swalErr(err).fire({}).then()
            }
        );
    }
    
    async getAllGuesses() {
        const response = await fetch(`${urlBackend}/guess/all`, requestInit(methods.GET));
        return await response.json();
    }
}

const guessNumService = new GuessNumService();
export default guessNumService;