import { useState, useEffect } from "react";

export default function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;               // nothing to start; no interval exists

    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup: runs when isRunning changes (e.g. to false) AND on unmount
    return () => clearInterval(id);
  }, [isRunning]);

  return seconds;
}