function TodoItem ({ id, text, onClicked }) {
    return <li onClick={() => onClicked(id)}>{text}</li>
}

export default TodoItem;