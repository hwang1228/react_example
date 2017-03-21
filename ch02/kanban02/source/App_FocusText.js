import React, { Component } from 'react';
import { render } from 'react-dom';

class FocusText extends Component {
    handleClick() {
        this.refs.myText2.value = this.refs.myTextInput.value;
    }

    render() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
                <input type="text" ref="myText2" />
            </div>
        )
    }
}

render(<FocusText />, document.body);