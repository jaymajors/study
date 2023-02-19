import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";

const responses = ["Yes", "No", "Maybe", "Ask again later."];

function App() {
  const [answer, setAnswer] = useState<string>();
  const [question, setQuestion] = useState<string>();

  function onButtonPress(e: SyntheticEvent) {
    e.preventDefault();
    setAnswer(responses[Math.floor(Math.random() * 4)]);
  }

  function handleQuestion(e: ChangeEvent<HTMLInputElement>) {
    setQuestion(e.target.value);
    setAnswer("");
  }

  return (
    <div>
      <form>
        <div>What's your question?</div>
        <input onChange={handleQuestion} type="text"></input>
        <input type="submit" onClick={onButtonPress} value="submit"></input>
        {answer && (
          <div>
            <h1>{question}</h1>
            <h1>{answer}</h1>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
