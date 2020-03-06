import React, { useState, useEffect } from 'react'
import start from '../hocs/start'

const FunctionalTimeout = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      alert(`COUNT IS ${count}`)
    }, 3000)
  }, [])
  return (
    <div>
      <div class="count-container">
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default start(FunctionalTimeout)