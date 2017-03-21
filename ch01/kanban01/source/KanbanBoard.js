import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
  render(){
    return (
      <div className="app">
        <List id='todo'
              title="할일"
              cards={this.props.cards.filter((card) => card.status === "todo")} />
        <List id='in-progress'
              title="진행중"
              cards={this.props.cards.filter((card) => card.status === "in-progress")} />
        <List id='done'
              title='완료'
              cards={this.props.cards.filter((card) => card.status === "done")} />
      </div>
    );
  }
};

export default KanbanBoard;