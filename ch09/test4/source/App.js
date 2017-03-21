import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch'
import ContactItem from './components/ContactItem';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import ContactsApp from './components/ContactsApp';


class ContactsAppContainer extends Component {
    constructor() {
        super();
        this.state = { contacts : [] };
    }

    componentDidMount() {
        fetch('http://localhost:8080/contacts')
            .then((response)=>response.json())
            .then((responseData)=> {
                this.setState({ contacts : responseData })
             }).catch((error)=>{
                 console.log('Error fetching and parsing data', error);
             })
    }

    render() {
        return (
            <ContactsApp contacts={this.state.contacts} />
        )
    }
}

render(<ContactsAppContainer />, document.getElementById('root'));