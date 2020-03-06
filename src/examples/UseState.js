import React from 'react'
import ReactDOM from 'react-dom'

let index = 0
let values = []
const useState = (initialValue) => {
  values[index] = values[index] === undefined ? initialValue : values[index]

  const thisIndex = index
  const updateState = (updatedValue) => {
    values[thisIndex] = updatedValue
    fakeRender()
  }

  return [values[index++], updateState]
}

function UseState() {
  const [value1, updatedValue1] = useState(0)
  const [value2, updatedValue2] = useState(0)
  const [value3, updatedValue3] = useState(0)

  return (
    <div id="useState-root">
      <div className="use-state-container ">
        <div>
          <div>Value 1</div>
          <div>
            {value1}
          </div>
          <button onClick={() => updatedValue1(value1 + 1)}>
            increment
        </button>
        </div>
        <div>
          <div>Value 2</div>
          <div>
            {value2}
          </div>
          <button onClick={() => updatedValue2(value2 - 1)}>
            decrement
        </button>
        </div>
        <div>
          <div>Value 3</div>
          <div>{value3}</div>
          <button onClick={() => updatedValue3(value3 * 2 || 2)}>
            double
        </button>
        </div>
      </div>
    </div>
  )
}

function fakeRender() {
  index = 0
  ReactDOM.render(<UseState />, document.getElementById('useState-root'))
}

export default UseState
