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

  const addBall = () => {
    if (count.balls === 3) {
      resetCount();
    } else {
      setCount({ strikes: count.strikes, balls: count.balls + 1 });
    }
  };

  const resetCount = () => {
    setCount({ strikes: 0, balls: 9 });
  };

  const foulBall = () => {
    if (count.strikes === 2) {
      return;
    } else {
      setCount({ strikes: count.strikes + 1, balls: count.balls });
    }
  };

  return (
    <>
      <div className="count-container">
        <div className="ball-container">
          <h2>Balls</h2>
          <p>{count.balls}</p>
        </div>
        <div className="strike-container">{count.strikes}</div>
        <Dashboard
          addStrike={addStrike}
          addBall={addBall}
          resetCount={resetCount}
          foulBall={foulBall}
        />
      </div>
    </>
  );
};

export default Display;
