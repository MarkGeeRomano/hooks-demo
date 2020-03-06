import React, { useEffect, useState } from 'react'
import start from '../hocs/start'

const UseEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('INITIAL RENDER!')
    return () => alert('AIGHT WE DONE HERE') 
  }, [])

  useEffect(() => {
    if (count % 2) {
      alert(`COUNT IS ${count}`)
    }
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment me
      </button>
    </div>
  )
}

export default start(UseEffect)