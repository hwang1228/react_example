
import React from 'react';
import {render} from 'react-dom';
import { Draggable, Droppable } from 'react-drag-and-drop';
 
class App extends React.Component {
    render() {
        return (
            <div>
                <Droppable types={['fruit']} onDrop={this.onDrop.bind(this)}>
                    <ul>
                        <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                        <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                        <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
                    </ul>
                </Droppable>
                <Droppable  types={['fruit']} onDrop={this.onDrop.bind(this)}>
                    <ul className="Smoothie">
                        <Draggable type="fruit" data="kiwi"><li>Kiwi</li></Draggable>
                    </ul>
                </Droppable>
            </div>
        );
    }
    onDrop(data, proxy) {
        console.log(data)
        console.log(proxy)
        console.log(proxy.target);
    }
}

render(<App />, document.getElementById('root'));