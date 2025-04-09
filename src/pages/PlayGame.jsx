import { Link, useLocation } from "react-router-dom";
import MasKedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButton";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import Button from "../components/Button/Button";
import { WordContext } from "../context/WordContext";

function PlayGame(){
    // const{state} =useLocation();
    const{word,wordList,setWord}=useContext(WordContext);

    const [guessedLetters,setGuessedLetter]=useState([]);

    const [step,setStep]=useState(0);

    // const {wordList}=useContext(WordContext);

    function stepUpdate(){
        setStep(step+1);
    }

    function onLetterClick(event){
        
        if(!word.toUpperCase().includes(event.target.innerText)) setStep(step+1);
        const newArr=[...guessedLetters,event.target.innerText];
        setGuessedLetter(newArr);



    }

    function Restart(){
        const idx=Math.floor(Math.random()*wordList.length);
        setWord(wordList[idx].wordSelected);
    }

    return(
        <>
            <h1>PlayGame {word}</h1>
            {/* <h1>PlayGame</h1> */}

            <MasKedText text={word} guessedLetters={guessedLetters} />
            <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={onLetterClick} />

            <HangMan step={step}/>
            <br />

            <Link to='/'> 
            <div><Button text={"HomePage"}/></div>
            </Link>
            <br />

            <Button text="Restart" styleType="secondary" 
            onClickHandler={Restart}
            />

            {wordList.map((wordObject)=>{
                return(
                    <div key={wordObject.id}>
                        <li>{wordObject.wordSelected}</li>
                         </div>
                ) 
            })}
        </>
    )
}
export default PlayGame;