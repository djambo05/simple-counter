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
        <h1>0</h1>
        <button className="plus">plus</button>
        <button className="minus">minus</button>
      </div>
    </div>
  );
}

export default App;
