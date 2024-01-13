import { useState } from 'react'
import ButtonGeneric from '../components/ButtonGeneric';
import TextGeneric from '../components/TextGeneric';

function App() {

  const [counter, setCounter] = useState(0);

  function decrement() {
      setCounter(counter - 1);
  }

  function increment() {
      setCounter(counter + 1);
  }

  function reset() {
      setCounter(0);
  }
  
  return(
    <>
        <h2>Counter</h2>
        <ButtonGeneric label={"-"} onClick={decrement} counter={counter} />
        &nbsp;&nbsp;&nbsp;
        <TextGeneric label={counter} />
        &nbsp;&nbsp;&nbsp;
        <ButtonGeneric label={"+"} onClick={increment} counter={counter} />
        <br />
        <br />
        <ButtonGeneric label="Reset" onClick={reset} counter={counter} />
        <br />

        <h2>Button Tailwind</h2>
    </>
    );
}

export default App
