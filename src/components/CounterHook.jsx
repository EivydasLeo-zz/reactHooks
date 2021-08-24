import React, { useState } from 'react';

function CounterHook() {
  const arr = useState(0);
  console.log(arr);
  const counter = arr[0];

  return (
    <div>
      <h2>CounterHook</h2>
      <p>{counter}</p>
      <button>Increase</button>
    </div>
  );
}

export default CounterHook;
