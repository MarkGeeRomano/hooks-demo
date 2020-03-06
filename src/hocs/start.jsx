
import React, { useState } from 'react';

const start = (Component) => () => {
  const [start, setStart] = useState(false)
  return (
    <div className="start-container">
      <div className="buttons-container">
        <button
          onClick={setStart.bind(null, true)}
          disabled={start}
        >
          Start
        </button>
        <button
          onClick={setStart.bind(null, false)}
          disabled={!start}
        >
          Restart
        </button>
      </div>
      <div className="child-container">
        {start && <Component />}
      </div>
    </div>
  );
};

export default start;