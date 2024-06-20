import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onButton = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="counter_card">
          <h1 className="heading">
            The Button has been clicked
            <span>{count}</span>times
          </h1>
          <p>Click the button to increase the count</p>
          <button type="button" onClick={this.onButton}>
            Click me
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
