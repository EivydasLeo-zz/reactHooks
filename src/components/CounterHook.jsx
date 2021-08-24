import React, { useState } from 'react';

function CounterHook() {
  const arr = useState(0);
  console.log(arr);
  const counter = arr[0];
  const setCounter = arr[1];

  const onCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>CounterHook</h2>
      <p>{counter}</p>
      <button onClick={onCounter}>Increase</button>
    </div>
  );
}

export default CounterHook;
