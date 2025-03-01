import { useState } from 'react';

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
    </div>
  );
}
function Greeting() {
  return <h1> Hello, welcome to the React world!</h1>;
}
function App() {
  return (
    <div>
      <Greeting />
      <ClickCounter />
    </div>
  );
}

export default App