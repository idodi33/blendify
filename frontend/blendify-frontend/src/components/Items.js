import React from 'react';
import { Container, Row } from 'reactstrap';
import ItemsForm from './ItemsForm.js';
import ItemsList from './ItemsList.js';

export default class Items extends React.Component {
    submitForm(e, input) {
        e.preventDefault();
        this.props.updateItems([input]);
    }
    render() {
        return (
        <div>
            <Container className="container z-depth-5">
                <Row>
                    <ItemsForm submitForm={(e, input) => this.submitForm(e, input)} type={this.props.type}/>
                </Row>
                <br/>
                <Row>
                    <ItemsList itemNames={this.props.items} type={this.props.type}/>
                </Row>
            </Container>
        </div>
        )
    }
}