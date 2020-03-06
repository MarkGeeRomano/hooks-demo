import React, { useState, useEffect, useRef } from 'react';
import start from '../hocs/start';

const FunctionalTimeoutWithRef = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  countRef.current = count

  useEffect(() => {
    setTimeout(() => {
      alert(`COUNT IS ${countRef.current}`)
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
  );
};

export default start(FunctionalTimeoutWithRef)