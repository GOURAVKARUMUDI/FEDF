import { useState, useEffect } from "react";

function TimerDemo() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 5), 5000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return <h2>Time: {time}sec</h2>;
}
export default TimerDemo;