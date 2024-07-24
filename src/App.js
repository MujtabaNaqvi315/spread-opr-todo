import './App.css';
import { useState } from 'react';

function App() {

  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  
  function handleChange (e) {
    const newValue = e.target.value;
    setItem(newValue)
  }

  function handleClick () {
    if (item){
      setItems((prevItems) => {
        return [...prevItems, item];
      })
      setItem("");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
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
      <div>
        <ul>
          {items.map((todoitem, index) => 
            <li key={index}>{todoitem}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
