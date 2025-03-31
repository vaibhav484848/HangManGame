function TextInput({type="text",label,placeHolder="Enter your input here",value,onChangeHandler}){
    return (
        <label >
            <span className="">{label}</span>
            <input 
                type={type}
                className="px-4 py-2 border border-gray-500 rounded-md w-full" 
                placeholder={placeHolder}
                // value={value}
                onChange={onChangeHandler}



            />

        </label>
    )
}
export default TextInput;