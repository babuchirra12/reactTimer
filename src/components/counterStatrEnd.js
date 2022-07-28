import React from "react";

export default function CounterStatrEnd() {
  const [count, setCount] = React.useState(0);
  let timerId = React.useRef(null);

  React.useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  function handleStart() {
    if (timerId.current !== null) return;

    timerId.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(timerId.current);
    timerId.current = null;
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div>Count: {count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
