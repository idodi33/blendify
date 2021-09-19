import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import BlendIntoButton from './BlendIntoButton.js';
import { addToQueue, makePlaylist } from '../ServerAPI';


export default function AllButtons(props, context) {
    return (
        <Container>
            <Row>
                <BlendIntoButton value="Blend Into Queue"
                                 blend={(artists, tracks, genres) => addToQueue(artists, tracks, genres)}/>
            </Row>
            <br/>
            <Row>
                <BlendIntoButton value="Blend Into Playlist"
                                 blend={(artists, tracks, genres) => makePlaylist(artists, tracks, genres)}/>
            </Row>
        </Container>
    )
}