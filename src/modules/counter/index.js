'use strict';
import React from 'react'

export class Counter extends React.Component {
  constructor(props) {
    super()
    this.state = {
      count: 0
    }
  }
  onClick(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
        <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.onClick.bind(this)}>Count Up!!</button>
        </div>
    )
  }
}
