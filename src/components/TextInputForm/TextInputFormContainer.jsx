import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

    const[inputType,setInputType]=useState("password");

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted");
    }

    function handleTextInputChange(event){
        console.log("Text Input Changed");
        console.log(event.target.value);
    }
    function handleShowHideClick(event){
        console.log("show/hide clicked");
        if(inputType==='password') setInputType('text');
        else setInputType('password');
    }

    return (
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
            inputType={inputType}
        />
    )

}
export default TextInputFormContainer;