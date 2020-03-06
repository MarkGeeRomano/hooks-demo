import React, { useState } from 'react'

import examples from './examples'

import './App.scss'

function App() {
  const [exampleIndex, setExampleIndex] = useState(0)

  const upOne = () => {
    if (exampleIndex === examples.length - 1) return
    setExampleIndex(exampleIndex + 1)
  }

  const downOne = () => {
    if (exampleIndex === 0) return
    setExampleIndex(exampleIndex - 1)
  }

  const { title, Component } = examples[exampleIndex];
  return (
    <div className="App">
      <div className="main-container">
        <div className="menu-container">
          <div className="arrows-container">
            <div onClick={downOne}>&lt;</div>
            <div onClick={upOne}>&gt;</div>
          </div>
          <div className="menu">
            {examples.map(({ title }, i) => (
              <div
                key={title}
                style={i === exampleIndex ? { backgroundColor: 'grey', color: 'white' } : {}}
                onClick={setExampleIndex.bind(null, i)}
              >
                {title}
              </div>
            ))}
          </div>
        </div>
        <div className="presentation-container">
          <h1>{title}</h1>
          <div id="stage" className="stage">
            <Component />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
