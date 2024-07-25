import './App.css';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import InputArea from './components/InputArea';

function App() {

  const [items, setItems] = useState([]);

  function addItem (inputText) {
    if (inputText){
      setItems((prevItems) => {
        return [...prevItems, inputText];
      })
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
        addBtnClick={addItem}
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
