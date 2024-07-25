import { useState } from 'react';

function InputArea ({ addBtnClick }) {

    const [inputText, setInputText] = useState("");

    function handleChange (e) {
        const newValue = e.target.value;
        setInputText(newValue)
      }

    return (
        <div className="form">
            <input 
                onChange={handleChange}
                type="text"
                value={inputText}
                onKeyDown={e => {
                    if (e.key === "Enter"){
                        addBtnClick(inputText);
                        setInputText("");
                    } 
                }}
            />
            <button 
                onClick={ () => {
                    addBtnClick(inputText);
                    setInputText("");
                }}
            >
            <span>Add</span>
            </button>
      </div>
    );
}

export default InputArea;