import React, { Component, PropTypes } from 'react';
import CardForm from './CardForm';

class EditCard extends Component {
     componentWillMount() {
        console.log(this.props.cards);
        console.log(this.props.params.card_id)
        let card = this.props.cards.find((card)=> card.id == this.props.params.card_id);
        console.log(card);
        this.setState(Object.assign({}, card));
    }

    handleChange(fieldName, value) {
        this.setState({ [fieldName] : value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.cardCallbacks.updateCard(this.state);
        this.props.router.push('/');
    }

    handleClose(e) {
        this.props.router.push('/');
    }

    render() {
        return (
            <CardForm draftCard={this.state}
                buttonLabel="Edit Card"
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                handleClose={this.handleClose.bind(this)} />
        );
    }
}

EditCard.propTypes = {
    cardCallbacks : PropTypes.object
}

export default EditCard;