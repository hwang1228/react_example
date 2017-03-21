import React, { Component, PropTypes } from 'react';
import List from './List';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class KanbanBoard extends Component {
  render(){
    return (
      <div className="app">
        <List id='todo'
              title="할일"
              cardCallbacks={this.props.cardCallbacks}
              taskCallbacks={this.props.taskCallbacks}
              cards={this.props.cards.filter((card) => card.status === "todo")} />
        <List id='in-progress'
              title="진행중"
              cardCallbacks={this.props.cardCallbacks}
              taskCallbacks={this.props.taskCallbacks}
              cards={this.props.cards.filter((card) => card.status === "in-progress")} />
        <List id='done'
              title='완료'
              cardCallbacks={this.props.cardCallbacks}
              taskCallbacks={this.props.taskCallbacks}
              cards={this.props.cards.filter((card) => card.status === "done")} />
      </div>
    );
  }
};

KanbanBoard.propTypes = {
  cards : PropTypes.arrayOf(PropTypes.object),
  taskCallbacks : PropTypes.object,
  cardCallbacks : PropTypes.object
}

export default DragDropContext(HTML5Backend)(KanbanBoard);