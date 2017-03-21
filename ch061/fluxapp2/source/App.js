import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import BankBalanceStore from './BankBalanceStore';
import BankRewardStore from './BankRewardStore';
import BankActions from './BankActions';

class App extends Component {
  constructor(){
    super(...arguments);
    BankActions.createAccount();
  }

  deposit() {
    BankActions.depositIntoAccount(Number(this.refs.amount.value));
    this.refs.amount.value = '';
  }

  withdraw() {
    BankActions.withdrawFromAccount(Number(this.refs.amount.value));
    this.refs.amount.value = '';
  }

  render(){
    return (
      <div>
        <header>FluxTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <h2>Your Points Rewards Tier is {this.state.rewardTier}</h2>
        <div className="atm">
          <input type="text" placeholder="Enter Amount" ref="amount" />
          <br />
          <button onClick={this.withdraw.bind(this)}>Withdraw</button>
          <button onClick={this.deposit.bind(this)}>Deposit</button>
        </div>
      </div>

    );
  }
}

App.getStores = ()=>([BankBalanceStore, BankRewardStore ]);
App.calculateState = (prevState)=> ( { 
    balance : BankBalanceStore.getState() ,
    rewardTier : BankRewardStore.getState()
})

const AppContainer = Container.create(App);

render(<AppContainer />, document.getElementById('root'));
