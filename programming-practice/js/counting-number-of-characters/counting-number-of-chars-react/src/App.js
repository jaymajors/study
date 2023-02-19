import './App.css';
import { useState } from 'react';

function App() {

  const [length, setLength] = useState(0);
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setLength(event.target.value.length);
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>What is the input?</div>
        <input onChange={handleChange}></input>
        <div>{input} is {length} characters long.</div>
      </form>
    </div>
  );
}

export default App;
