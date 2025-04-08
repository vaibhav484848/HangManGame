const ALPHABETS="QWERTYUIOPASDFGHJKLZXCVBNM";

function LetterButtons({text,guessedLetters,onLetterClick,updateStep}){
    
    const originalLetters= new Set(text?.toUpperCase().split(''));
    const guessedLetterSet= new Set(guessedLetters);

    // function onClickHandler(e){
    //     onLetterClick(e.target.innerText);
    // }

    const buttonStyle=function(letter){
        if(guessedLetterSet.has(letter)){
            if(originalLetters.has(letter)){
                return 'bg-green-500'
            }
            else{
                
                return 'bg-red-500'
            }
            // return `${originalLetters.has(letter)?'bg-green-500':'bg-red-500'}`;
        }
        else{
            return 'bg-blue-500';
        }
    }

    const buttons=ALPHABETS.split('').map(letter=>{
        return (
            <button
                key={`button -${letter}`}
                onClick={onLetterClick}
                disabled={guessedLetterSet.has(letter)}
                // className=""
                className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(letter)}`}
                >
                    {letter}
                </button>
        )
    });

    return (
        <>
         {buttons}
        </>
       
    )

}

export default LetterButtons;