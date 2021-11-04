import React from 'react';
import { Container, Row } from 'reactstrap';
import Item from './Item.js';

export default function ItemsList(props) {
    return (
        <Container> {
            props.itemNames.map((name) =>
                <Item key={name} name={name} type={props.type}/>
                )
            }
        </Container>
    )
}