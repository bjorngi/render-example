import React from "react";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>App {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <div className="content">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
