import React, { Component } from 'react';

class ListItem extends Component {
  render() { 
    return (
      <li>
       {this.props.children} : {this.props.price} x {this.props.quantity}
          = { this.props.quantity * this.props.price }
      </li>
    );
  }
}

export default ListItem;