import React, { Component, PropTypes } from 'react'
import Digit from './Digit';

class Clock extends Component {
  render() {
    return(
      <div>
        <Digit value={this.props.hours} />{' : '}
        <Digit value={this.props.minutes} />{' : '}
        <Digit value={this.props.seconds} />{' . '}
        <Digit value={this.props.millisecs} />
      </div>
    );
  }
}

Clock.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  millisecs : PropTypes.number.isRequired
}

export default Clock;
