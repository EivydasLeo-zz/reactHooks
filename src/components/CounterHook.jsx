import React, { useState } from 'react';

function CounterHook() {
  const [counter, setCounter] = useState(0);
  // console.log(arr);
  // const counter = arr[0];
  // const setCounter = arr[1];

  const obj = {
    name: 'bob',
    age: 55,
  };
  const { name, age } = obj;
  console.log(name, age);

  const arr1 = [100, 'yes', true];
  const [nr, answer, monday] = arr1;
  console.log(nr, answer, monday);

  return (
    <div>
      <h2>CounterHook</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default CounterHook;
