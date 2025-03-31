import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit,handleTextInputChange,handleShowHideClick,inputType}){

    

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <TextInput
                        label="Enter a word"
                        placeHolder="Enter a word or phrase here ..."
                        onChangeHandler={handleTextInputChange}
                        type={inputType}
                    />
                </div>

                <div>
                    <Button
                        styleType="warning"
                        text={inputType==='text'?'hide':'show'}
                        onClickHandler={handleShowHideClick}
                    />
                </div>

                <div>
                    <Button
                        styleType="primary"
                        type="submit"
                        text="Submit"
                        
                    />
                </div>

            </form>
        </div>
    )
}

export default TextInputForm;