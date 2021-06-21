import React from 'react';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.text) this.props.addTodo(this.state.text);
        this.setState({ text: '' });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
                <button onClick={(event) => this.handleSubmit(event)}>Add Todo</button>
            </div>
        )
    }
}

export default TodoInput;