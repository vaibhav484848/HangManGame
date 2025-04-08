import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";

function Home(){

    const [word,setWord]=useState('');

    async function fetchWords(){
        const response = await fetch('http://localhost:3000/words')
        const data=await response.json();
        const idx=Math.floor(Math.random()*data.length);
        setWord(data[idx].wordSelected);
    }

    useEffect(()=>{
        fetchWords()
    },[])


    return(
        <div>
            <Link to='/play' state={{wordSelected:word}}>
            <Button text={"Singleplayer Game"}/>
            </Link>
            <br />
            <Link to='/start'>
            <div className="mt-4">
            <Button text={"Multiplayer Game"} styleType="secondary"/>
            </div>
            </Link>
        </div>
    )
}
export default Home;