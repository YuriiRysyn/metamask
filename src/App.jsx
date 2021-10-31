import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div> 
  );
}

export default App;
