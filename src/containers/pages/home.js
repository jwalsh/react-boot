'use strict';
import React from 'react'
import { WidgetComponent } from '../../modules/widget/index'
import { Counter } from '../../modules/counter/index'

function Home(props) {
  return <div>
    <h1>react-code Home</h1>
    <WidgetComponent />
    <Counter />
  </div>
}

export default Home;
