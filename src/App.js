import { useState } from "react";
import "./index.scss";
function App() {
  const [count, setCount] = useState(0);
  const handleCountPlus = () => {
    setCount(count + 1);
  };
  const handleCountMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={handleCountPlus} className="plus">
          plus
        </button>
        <button onClick={handleCountMinus} className="minus">
          minus
        </button>
      </div>
    </div>
  );
}

export default App;
