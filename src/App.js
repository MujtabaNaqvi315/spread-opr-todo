import './App.css';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import InputArea from './components/InputArea';

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

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        item={item}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <div>
        <ul>
          {items.map((todoitem, index) => 
            <TodoItem 
              key={index}
              id={index}
              text={todoitem}
              onClicked={deleteItem}
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
