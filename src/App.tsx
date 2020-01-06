import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
