'use strict';
import React from 'react'

function Layout(props) {
  return <div>{props.children}</div>
}

Layout.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default Layout;
