import React, { useContext } from 'react'

const MyContext = React.createContext()

class TopLevelComponent extends React.Component {
  render() {
    return (
      <MyContext.Provider value={'RENDER THIS TEXT'}>
        <SomeDeepComponent />
      </MyContext.Provider>
    )
  }
}

class SomeDeepComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent/>
      </div>
    )
  }
}

const ChildComponent = () => {
  const text = useContext(MyContext)
  return (
    <div>
      {text}
    </div>
  )
}

export default TopLevelComponent