import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const displayValue = useMemo(() => {
    return String(count);
  }, [count]);

  return (
    <div className="counter-container">
      <h2>Count: {displayValue}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
