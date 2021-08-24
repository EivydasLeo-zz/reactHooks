import React, { useState, useEffect } from 'react';

function CounterHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  // componentDidMount
  // componentDidUpdate
  // useEffect() vietoj dvieju auksciau isvardintu

  useEffect(() => {
    console.log('useEffect');
    document.title = ` ${name} has clicked ${counter} times`;
  });

  return (
    <div>
      <h2>Counter of {name}</h2>
      <p>
        {name} has clicked {counter} times
      </p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setName('James')}>Set name to James</button>
      <input type="text" placeholder="enter Name" value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  );
}

export default CounterHook;
