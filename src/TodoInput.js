import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.text) this.props.addTodo(this.state.text);
        this.setState({ text: '' });
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Row>
                    <Col><Form.Control type="text" name="text" value={this.state.text} onChange={(event) => this.handleChange(event)} /></Col>
                    <Col xs="auto"><Button type="submit">Add Todo</Button></Col>
                </Form.Row>
            </Form>
        )
    }
}

export default TodoInput;