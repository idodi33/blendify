import React from 'react';
import { Button } from 'reactstrap';
import { ItemsContext } from '../context/ItemsContext';
import addToQueue from '../ServerAPI';

export default function BlendIntoQueueButton(props, context) {
    return (
    <ItemsContext.Consumer>
        {(context) =>
            <Button onClick={() =>
            addToQueue(context.items['artists'], context.items['tracks'], context.items['genres'])}>
                Blend Into Queue
            </Button>
        }
    </ItemsContext.Consumer>
    );
};