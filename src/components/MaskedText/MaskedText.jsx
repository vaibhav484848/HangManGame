import { getAllCharacters } from "./MaskingUtility";

function MasKedText({text,guessedLetters}){

    const maskedString= getAllCharacters(text,guessedLetters);

    return (
        <div>
            {maskedString.map((letter,idx)=>{
                return(
                    <span key={idx} className="inline-block mx-1 " >
                        {letter}
                        </span>
                )
            })}
        </div>
    )
}
export default MasKedText;