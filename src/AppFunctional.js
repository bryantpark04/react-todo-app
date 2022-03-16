const App = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        document.title = `${todos.filter(todo => !todo.done).length} tasks to do`
    })

    const loadTodos = () => {
        const todoList = JSON.parse(localStorage.getItem("todos"));
        if (todoList) setTodos(todoList);
    }

    const saveTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { idx: prevTodos.length, text: text, done: false }
        ]);
    }

    const deleteTodo = (idx) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.idx !== idx));
    }

    const swapTodos = (idx1, idx2) => {
        if (idx2 === -1 || idx2 === todos.length) return;
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.idx === idx1) return { ...prevTodos[idx2], idx: idx1 };
            else if (todo.idx === idx2) return { ...prevTodos[idx1], idx: idx2 };
            else return todo;
        }));
    }

    const editTodo = (idx, newText) => {
        setTodos((prevTodos) => prevTodos.map(todo => todo.idx !== idx ? todo : { ...todo, text: newText }));
    }

    const toggleTodo = (idx) => {
        setTodos((prevTodos) => prevTodos.map(todo => todo.idx !== idx ? todo : { ...todo, done: !todo.done }));
    }

    return (
        <Container>
            <Row>
                <Col><Header /></Col>
                <Col sm="auto"><StorageControl loadTodos={() => loadTodos()} saveTodos={() => saveTodos()} /></Col>
            </Row>
            <Row>
                <Col>
                    <TodoList
                        todos={todos}
                        swapTodos={(idx1, idx2) => swapTodos(idx1, idx2)}
                        editTodo={(idx, newText) => editTodo(idx, newText)}
                        toggleTodo={(idx) => toggleTodo(idx)}
                        deleteTodo={(idx) => deleteTodo(idx)}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TodoInput addTodo={(text) => addTodo(text)} />
                </Col>
            </Row>
        </Container>
    )
}

export default App;
