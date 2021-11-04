import React from 'react';
import { getImageURL } from '../ServerAPI';
import './Item.css';


export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imageURL: ""};
    this.isArtist = (this.props.type == "artist");
  }

  componentDidMount() {
    if (this.isArtist)
        this.saveImageURL();
  }

  saveImageURL = () => {
    getImageURL(this.props.name).then((url) => this.setState({imageURL: url}));
  }

  render = () => {
    return (
    <div className="itemIcon">
        <h4> {this.props.name} </h4>
        {this.isArtist && <img className="itemImage" src={this.state.imageURL}/>}
    </div>
    )
  }
}
