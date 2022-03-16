import Button from "react-bootstrap/Button";

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
                    <td><Button variant="outline-dark" size="sm" onClick={() => moveTodo(direction)}>{direction}</Button></td>
                ))
            }
            <td><Button variant="secondary" size="sm" onClick={handleEdit}>Edit</Button></td>
            <td><Button variant="danger" size="sm" onClick={() => props.deleteTodo(props.todo.idx)}>Delete</Button></td>
        </tr>
    );
}

export default Todo;