import React from 'react'

const MyContext = React.createContext()

class TopLevelComponent extends React.Component {
  render () {
    return (
      <MyContext.Provider value={'RENDER THIS TEXT'}>
        <SomeDeepComponent/>
      </MyContext.Provider>
    )
  }
}

class SomeDeepComponent extends React.Component {
  render () {
    return (
      <div>
        <MyContext.Consumer>
          {(textToRender) => (
            <ChildComponent text={textToRender}/>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

const ChildComponent = ({ text }) => {
  return (
    <div>
      {text}
    </div>
  )
}

export default TopLevelComponent