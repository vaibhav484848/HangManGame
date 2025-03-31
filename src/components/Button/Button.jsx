import getButtonStyling from "./getButtonStyling.js";

function Button({text,onClickHandler,styleType="primary",type="button"}){
    return (
        <button 
        onClick={onClickHandler}
        className={`px-4 py-2 ${getButtonStyling(styleType)} `}
        type={type}
        >

            {text}
        </button>
    )
}



export default Button;