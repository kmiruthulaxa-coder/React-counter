import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>React Counter</h1>

      <h2>Count: {count}</h2>

      <div className="buttons">
           <button className="plus" onClick={() => setCount(count + 1)}>+</button>
        <button  className="minus"onClick={() => setCount(count - 1)}>-</button>

       

        <button className= "reset"onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;