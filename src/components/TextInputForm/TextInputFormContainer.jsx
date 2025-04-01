import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { Link, useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const[inputType,setInputType]=useState("password");
    const[value,setValue]=useState("");

    const navigate =useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        // console.log("Form Submitted");
        if(value){
            console.log('Form Submitted ',value);
            //if we have something in value then we want to go the play page
            setTimeout(()=>navigate('/play'),5000);
            // navigate('/play');
            // console.log(value);
        }
    }

    function handleTextInputChange(event){
        console.log("Text Input Changed");
        console.log(event.target.value);
        if(event.target.value){
            setValue(event.target.value);
        }
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