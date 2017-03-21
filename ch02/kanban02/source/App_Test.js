import React, { Component } from 'react';
import { render } from 'react-dom';

class Test extends Component {
    handleSubmit(e) {
        console.log("Submitted values are: ",
        e.target.name.value,
        e.target.email.value);
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="formGroup">
                Name : <input name="name" type="text" />
                </div>
                <div className="formGroup">
                E-mail : <input name="email" type="mail" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

render(<Test />, document.body)