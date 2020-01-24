import React from "react";

const Dashboard = props => {
  return (
    <div className="button-container">
      <button
        onClick={() => {
          props.addBall();
        }}
        data-testid="ball-button"
      >
        Ball
      </button>
      <button
        onClick={() => {
          props.addStrike();
        }}
        data-testid="strike-button"
      >
        Strike
      </button>
      <button
        onClick={() => {
          props.foulBall();
        }}
        data-testid="foul-button"
      >
        Foul
      </button>
      <button
        onClick={() => {
          props.resetCount();
        }}
        data-testid="hit-button"
      >
        Hit
      </button>
    </div>
  );
};

export default Dashboard;
