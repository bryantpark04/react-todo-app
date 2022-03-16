import Table from 'react-bootstrap/Table';

import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            <Table responsive striped size="sm">
                <tbody>
                    {props.todos.map(todo => (
                        <Todo
                            key={todo.idx}
                            swapTodos={props.swapTodos}
                            todo={todo}
                            editTodo={props.editTodo}
                            onToggle={() => props.toggleTodo(todo.idx)}
                            deleteTodo={props.deleteTodo}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TodoList;