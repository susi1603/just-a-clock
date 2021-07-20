import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [timeValue, setTime] = React.useState(time);

  function resetTime() {
    let updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }

  setInterval(resetTime, 1000);
  return (
    <div className="container">
      <h1>{timeValue}</h1>
      <button onClick={resetTime}>Get Time</button>
    </div>
  );
}

export default App;
