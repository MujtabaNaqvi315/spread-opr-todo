function InputArea ({ item, handleChange, handleClick }) {
    return (
        <div className="form">
            <input 
                onChange={handleChange}
                type="text"
                value={item}
                onKeyDown={e => (e.key === "Enter") && handleClick()}
            />
            <button 
                onClick={handleClick}
            >
            <span>Add</span>
            </button>
      </div>
    );
}

export default InputArea;