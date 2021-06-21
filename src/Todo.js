const Todo = (props) => {
    const handleEdit = () => {
        const newText = prompt(`Enter new text for: \n${props.todo.text}`);
        if (newText) props.editTodo(props.todo.idx, newText);
    }

    // is using the ↓ and ↑ in JS code allowed???
    const moveTodo = (direction) => {
        props.swapTodos(props.todo.idx, props.todo.idx + (direction === '↓' ? 1 : -1))
    }

    return (
        <tr>
            <td><input type="checkbox" checked={props.todo.done} onChange={props.onToggle} /></td>
            <td>{props.todo.text}</td>
            {
                ["↑", "↓"].map((direction) => (
                    <td><input type="button" value={direction} onClick={() => moveTodo(direction)} /></td>
                ))
            }
            <td><input type="button" value="Edit" onClick={handleEdit} /></td>
        </tr>
    );
}

export default Todo;