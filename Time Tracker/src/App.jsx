import { useCallback, useEffect, useState } from "react";
import "./App.css";

function formatTime(second) {
  const minute = Math.floor(second / 60);
  second = second % 60;

  return (minute + "").padStart(2, "0") + ":" + (second + "").padStart(2, "0");
}

function App() {
  const [second, setSecond] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!play) return;

    const interval = setInterval(() => {
      setSecond((previousSecond) => previousSecond + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [play]);

  const onReset = useCallback(() => {
    setSecond(0);
  }, []);

  const onToggle = useCallback(() => {
    setPlay((previousPlay) => !previousPlay);
  }, []);

  return (
    <>
      <h1>{formatTime(second)}</h1>
      <button onClick={onToggle}>{play ? "Stop" : "Start"}</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default App;
