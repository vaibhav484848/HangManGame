import { useLocation } from "react-router-dom";
import MasKedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButton";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";

function PlayGame(){
    const{state} =useLocation();

    const [guessedLetters,setGuessedLetter]=useState([]);

    const [step,setStep]=useState(0);

    function stepUpdate(){
        setStep(step+1);
    }

    function onLetterClick(event){
        
        if(!state.wordSelected.toUpperCase().includes(event.target.innerText)) setStep(step+1);
        const newArr=[...guessedLetters,event.target.innerText];
        setGuessedLetter(newArr);



    }

    return(
        <>
            <h1>PlayGame {state.wordSelected}</h1>

            <MasKedText text={state.wordSelected} guessedLetters={guessedLetters} />
            <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={onLetterClick} />

            <HangMan step={step}/>
        </>
    )
}
export default PlayGame;