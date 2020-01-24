import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Display = () => {
  const [count, setCount] = useState({ strikes: 0, balls: 0 });

  const addStrike = () => {
    if (count.strikes === 2) {
      resetCount();
      return count;
    } else {
      setCount({ strikes: count.strikes + 1, balls: count.balls });
      return count;
    }
  };

  return (
    <>
      <div className="count-container">
        <div className="ball-container">
          <h2>Balls</h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Display;
