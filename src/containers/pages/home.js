'use strict';
import React from 'react'
import { WidgetComponent } from '../../modules/widget/index'
import { Counter } from '../../modules/counter/index'
import { HelloMessage } from '../../modules/hello-message'

function Home() {
  return <div>
    <h1>react-code Home</h1>
    <WidgetComponent />
    <HelloMessage name="Sebastian" />
    <HelloMessage />
    <Counter />
    <Counter initialCount={1} />
    <Counter initialCount="1" />
  </div>
}

export default Home;
