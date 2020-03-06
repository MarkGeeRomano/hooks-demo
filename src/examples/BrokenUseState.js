import React from 'react'
import ReactDOM from 'react-dom'

let index = 0
let values = []
const abuseState = (initialValue) => {
  values[index] = values[index] === undefined ? initialValue : values[index]

  const thisIndex = index
  const updateState = (updatedValue) => {
    values[thisIndex] = updatedValue
    fakeRender()
  }

  return [values[index++], updateState]
}

function BrokenUseState() {
  const [value1, updatedValue1] = abuseState(0)

  let value2, updatedValue2;
  if (value1 < 5) {
    ([value2, updatedValue2] = abuseState(0))
  }

  const [value3, updatedValue3] = abuseState(0)

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
  ReactDOM.render(<BrokenUseState />, document.getElementById('useState-root'))
}


export default BrokenUseState
