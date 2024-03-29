import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback(
      () => {
        setCounter( (value) => value + 1);
      },
      [],
    )
    
  return (
    <div>
        <h1>useCounter Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather} />
    </div>
  )
}
