import React, {Component} from 'react'
import {render} from 'react-dom'

import { TimeAgo } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <TimeAgo time={Date.now()} />
        <TimeAgo time={Date.now() - 1000000} />
        <TimeAgo time={Date.now() - 10000000} suffix={false} />
        <TimeAgo time={Date.now() - 100000000} style={{ color: 'red' }} />
        <TimeAgo prefix="as of" time={Date.now() - 1000000000} containerStyle={{
          paddingTop: 14,
          paddingBottom: 14,
          backgroundColor: 'yellow'
        }} style={{ textAlign: 'center' }} />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
