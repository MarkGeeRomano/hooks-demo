import React, { Component } from 'react'
import start from '../hocs/start'

class ClassTimeout extends Component {
  state = { count: 0 }

  componentDidMount = () => {
    setTimeout(() => {
      alert(`COUNT VALUE IS ${this.state.count}`)
    }, 3000)
  }

  render() {
    return (
      <div>
        <div class="count-container">
          {this.state.count}
        </div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    )
  }
}

export default start(ClassTimeout)