import { useState } from 'react';

function TodoItem ({ text }) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick () {
        setIsClicked(prevValue => !prevValue);
    }

    return <li style={{textDecoration: isClicked ? "line-through" : "none"}} onClick={handleClick}>{text}</li>
}

export default TodoItem;