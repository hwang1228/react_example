import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import bankStore from './BankStore';
import constants from './Constants';
import BankApp from './BankApp';

class BankAppContainer extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            balance : bankStore.getState().balance
        }
    }

    componentDidMount() {
        this.unsubscribe = bankStore.subscribe(()=> {
            return this.setState({ balance : bankStore.getState(). balance });
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <BankApp balance={ bankStore.getState().balance }
                onDeposit={ (amount)=> bankStore.dispatch(
                    { type : constants.DEPOSIT_INTO_ACCOUNT, amount:amount }
                )}
                onWithdraw={ (amount)=> bankStore.dispatch(
                    { type : constants.WITHDRAW_FROM_ACCOUNT, amount:amount }
                ) }    
            />
        );
    }
}

export default BankAppContainer;