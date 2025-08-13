import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const btnStyle = {
    margin: '5px',
    padding: '10px 15px',
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{count}</h2>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>Increase</button>
      <button style={btnStyle} onClick={() => setCount(count - 1)}>Decrease</button>
      <button style={btnStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
