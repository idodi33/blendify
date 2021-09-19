import React, { createContext } from 'react';

export const ItemsContext = createContext();

export class ItemsContextProvider extends React.Component {
    state = {
        items: {'artists': [], 'tracks': [], 'genres': []}
    };
    updateItems(addedItems, type) {
        let newItems = this.state.items;
        newItems[type] = newItems[type].concat(addedItems);
        this.setState({items: newItems});
    }
    render() {
        return (
            <ItemsContext.Provider value={{...this.state,
            updateItems: (addedItems, type) => this.updateItems(addedItems, type)}}>
                {this.props.children}
            </ItemsContext.Provider>
        );
    }
}
