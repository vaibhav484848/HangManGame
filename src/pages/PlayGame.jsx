import { useLocation } from "react-router-dom";
import MasKedText from "../components/MaskedText/MaskedText";

function PlayGame(){
    const{state} =useLocation();
    return(
        <>
            <h1>PlayGame {state.wordSelected}</h1>

            <MasKedText text={state.wordSelected} guessedLetters={['h','e']}/>
        </>
    )
}
export default PlayGame;