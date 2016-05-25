'use strict';
import React from 'react'
import { WidgetComponent } from '../../modules/widget/index'
import { Counter } from '../../modules/counter/index'
// PropTypes
import { HelloMessage } from '../../modules/hello-message'
// Reducers
import { TimedCounter } from '../../modules/timed-counter'

function Home() {
  return <div>
    <h1>react-code Home</h1>
    <WidgetComponent />
    <hr />
    <HelloMessage name="Sebastian" />
    <HelloMessage />
    <hr />
    <Counter />
    <Counter initialCount={1} />
    <Counter initialCount="1" />
    <hr />
    <TimedCounter />
  </div>
}

export default Home;
