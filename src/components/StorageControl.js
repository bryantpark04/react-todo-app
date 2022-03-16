import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const StorageControl = (props) => (
    <ButtonGroup size="sm" vertical>
        <Button variant="outline-primary" onClick={props.loadTodos}>Load</Button>
        <Button variant="outline-primary" onClick={props.saveTodos}>Save</Button>
    </ButtonGroup>
)

export default StorageControl;