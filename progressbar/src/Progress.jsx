import React from "react";

export default function Progress() {
  const [count, setCount] = React.useState(0);

  function handleBars() {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <button onClick={handleBars}>Add</button>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bar">
          <div className="animate-bar"></div>
        </div>
      ))}
    </div>
  );
}
