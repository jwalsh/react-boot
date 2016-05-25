'use strict';
import React from 'react'

export class TimedCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: new Date().getTime(),
      clicks: []
    }
    this.tick = this.tick.bind(this);
  }
  tick() {
    let epoch = new Date().getTime();
    this.setState({
      count: this.state.clicks.push(epoch)
    });
  }
  delays() {
    return this.state.clicks.reduce((p, c, i, a)=> {
      return p + (new Date().getTime()) - c;
    }, 0) / this.state.clicks.length;
  }
  render() {
    return (
      <dl onClick={this.tick}>
        <dt>Clicks:</dt><dd> {this.state.clicks.length} </dd>
        <dt>Delays:</dt><dd> {this.delays()} </dd>
        <dt>Load:</dt><dd> { (new Date().getTime()) - this.state.load} </dd>
        <dt>Raw:</dt><dd> {this.state.clicks} </dd>
      </dl>
    );
  }
}
TimedCounter.propTypes = { clicks: React.PropTypes.array };
