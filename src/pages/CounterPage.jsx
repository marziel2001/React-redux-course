import { useState, useEffect } from "react";
import Button from "../components/Button";

function useSomething() {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
}

function CounterPage({ initialCount }) {
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default CounterPage;
