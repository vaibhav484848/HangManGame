import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame(){
    return (
        <>
        <h1>Start Game</h1>
        <TextInputFormContainer/>
        <Link to='/play'>Play Game </Link>
        </>
    )
}
export default StartGame;