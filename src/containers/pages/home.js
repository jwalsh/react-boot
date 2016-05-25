'use strict';
import React from 'react'
import { WidgetComponent } from '../../modules/widget/index'
import { Counter } from '../../modules/counter/index'
import { HelloMessage } from '../../modules/hello-message'

function Home(props) {
  return <div>
    <h1>react-code Home</h1>
    <WidgetComponent />
    <HelloMessage name="Sebastian" />
    <Counter />
  </div>
}

export default Home;
