import React from 'react';
import { Button } from 'reactstrap';
import { ItemsContext } from '../context/ItemsContext';
import addToQueue from '../ServerAPI';

export default function BlendIntoButton(props, context) {
    return (
    <ItemsContext.Consumer>
        {(context) =>
            <Button color="primary" outline onClick={() =>
            props.blend(context.items['artists'], context.items['tracks'], context.items['genres'])}>
                {props.value}
            </Button>
        }
    </ItemsContext.Consumer>
    );
};