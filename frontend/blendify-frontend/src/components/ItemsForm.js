import React from 'react';
import { Form, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';

export default class ItemsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};
    }
    handleChange = (event) => {
        const { target } = event;
        this.setState({
          input: target.value,
        });
    };
    render() {
        const type = this.props.type;
        const id = type  + "Name";
        const placeholder = type.charAt(0).toUpperCase() + type.slice(1) + "...";
        return (
        <div>
          <Label for={id}></Label>
          <InputGroup>
            <Input type={type} name={type} id={id} placeholder={placeholder}
               onChange={e => this.handleChange(e)} />
            <InputGroupAddon addonType="append">
                <Button color="primary" outline onClick={(e) => this.props.submitForm(e, this.state.input)}>Add</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        )
    }
}