import React from 'react';
import Items from './Items.js';
import { Container, Row, Col } from 'reactstrap';
import { ItemsContext } from '../context/ItemsContext';

export default function AllItems(props, context) {
    return (
        <ItemsContext.Consumer>
            {(context) =>
                (
                <Container>
                <Row>
                <Items type="artist" updateItems={(newItems) => context.updateItems(newItems, 'artists')}
                   items={context.items['artists']}/>
                </Row>
                <Row>
                <Items type="track" updateItems={(newItems) => context.updateItems(newItems, 'tracks')}
                   items={context.items['tracks']}/>
                </Row>
                <Row>
                <Items type="genre" updateItems={(newItems) => context.updateItems(newItems, 'genres')}
                   items={context.items['genres']}/>
                </Row>
                </Container>
                )
            }
        </ItemsContext.Consumer>
    );
}