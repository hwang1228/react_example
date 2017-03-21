import React, { Component } from 'react';
import ListItem from './ListItem.js'; 

class GroceryList extends Component {
  render() {
    return (
      <ul>
        <ListItem quantity="1" price="200">빵</ListItem>
        <ListItem quantity="6" price="150">계란</ListItem>
        <ListItem quantity="2" price="900">우유</ListItem>
      </ul>
    );
  }
}

export default GroceryList;