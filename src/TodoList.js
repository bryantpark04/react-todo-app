import Table from 'react-bootstrap/Table';

import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            <Table striped bordered variant="dark">
                <tbody>
                    {props.todos.map(todo => (
                        <Todo key={todo.idx} swapTodos={props.swapTodos} todo={todo} editTodo={props.editTodo} onToggle={() => props.toggleTodo(todo.idx)} />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TodoList;