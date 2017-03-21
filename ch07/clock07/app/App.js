import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './Clock';
import Perf from 'react-addons-perf';

class App extends Component {
  constructor(){
    super(...arguments);
    this.state = this.getTime();
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState(this.getTime());
    },1);
  }

  getTime(){
    let now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      millisecs : now.getMilliseconds()
    };
  }

  render(){
    let clocks = [];
    for (var i=0; i<100; i++) {
      clocks.push(
        <Clock key={'clock'+i} hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            millisecs={this.state.millisecs} />
      );
    }
    return (
      <div>
        {clocks}
      </div>
    );
  }
}

Perf.start();
render(<App />, document.getElementById("root"));
setTimeout(()=>{
  Perf.stop();
  Perf.printInclusive();
  Perf.printWasted();
}, 1500)

