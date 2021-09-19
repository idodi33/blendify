import React from 'react';
import Item from './Item.js';

export default function ItemsList(props) {
    return (
        <div> {
            props.itemNames.map((name) =>
                <Item key={name} name={name}/>
                )
            }
        </div>
    )
}