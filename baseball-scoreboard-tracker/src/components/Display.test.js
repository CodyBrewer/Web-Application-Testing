import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

// ClickMe test function is used by passing in the number of clicks that you are wanting to imitate and the item you want to click and then starts a loop that calls the fireEvent.click() fn from the react testing-library package
const clickMe = (numClicks, itemToClick) => {
  for (let i = numClicks; i > 0; i--) {
    fireEvent.click(itemToClick);
  }
};

describe("Display", () => {
  test("should render without crashing", () => {
    render(<Display />);
  });
  test("should display the balls and strike values at 0 on first render", () => {
    const { getByTestId } = render(<Display />);
    expect(getByTestId("strikes").textContent).toBe("0");
    expect(getByTestId("balls").textContent).toBe("0");
  });
  test("should increment the strike to 1 when strike button is clicked once", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId("strike-button");

    clickMe(1, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("1");
  });
  test("should increment the strikes value to 2 when the strike button is clicked twice", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId("strike-button");
    clickMe(2, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("2");
  });
  test("should increment the strikes value to 2 and then back to 0 when the strike button is clicked three times", () => {
    const { getByTestId } = render(<Display />);
    const strikeButton = getByTestId("strike-button");
    clickMe(2, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("2");
    clickMe(1, strikeButton);
    expect(getByTestId("strikes").textContent).toBe("0");
  });
  test("should increment the balls value to 1 when the ball button is clicked once", () => {
    const { getByTestId } = render(<Display />);
    const ballsButton = getByTestId("ball-button");
    clickMe(1, ballsButton);
    expect(getByTestId("balls").textContent).toBe("1");
  });
  test("should increment the balls value to 2 when the ball button is clicked twice", () => {
    const { getByTestId } = render(<Display />);
    const ballsButton = getByTestId("ball-button");
    clickMe(2, ballsButton);
    expect(getByTestId("balls").textContent).toBe("2");
  });
  test("should increment the balls value to 3 when the ball button is clicked three times", () => {
    const { getByTestId } = render(<Display />);
    const ballsButton = getByTestId("ball-button");
    clickMe(3, ballsButton);
    expect(getByTestId("balls").textContent).toBe("3");
  });
  test("should increment the balls value to 3 and then back to 0 when the ball button is clicked four times", () => {
    const { getByTestId } = render(<Display />);
    const ballsButton = getByTestId("ball-button");
    clickMe(3, ballsButton);
    expect(getByTestId("balls").textContent).toBe("3");
    clickMe(1, ballsButton);
    expect(getByTestId("balls").textContent).toBe("0");
  });
  test("should increment the strikes value to 1 when the foul button is clicked once and the strikes value is at 0", () => {
    const { getByTestId } = render(<Display />);
    const foulButton = getByTestId("foul-button");
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0");
    clickMe(1, foulButton);
    expect(strikes.textContent).toBe("1");
  });
  test("should increment the strikes value to 2 when the foul button is clicked twice and the strikes value is at 0", () => {
    const { getByTestId } = render(<Display />);
    const foulButton = getByTestId("foul-button");
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0");
    clickMe(2, foulButton);
    expect(strikes.textContent).toBe("2");
  });
  test("should increment the strikes value to 2 and when foul button is clicked more than twice and the strikes value is at 0", () => {
    const { getByTestId } = render(<Display />);
    const foulButton = getByTestId("foul-button");
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0");
    clickMe(3, foulButton);
    expect(strikes.textContent).toBe("2");
    clickMe(5, foulButton);
    expect(strikes.textContent).toBe("2");
  });
  test("should increment the strikes value to 2 when the foul button is clicked once and the strikes button is clicked once", () => {
    const { getByTestId } = render(<Display />);
    const foulButton = getByTestId("foul-button");
    const strikeButton = getByTestId("strike-button");
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0");
    clickMe(1, strikeButton);
    expect(strikes.textContent).toBe("1");
    clickMe(1, foulButton);
    expect(strikes.textContent).toBe("2");
  });
  test("should not increment the strikes values if the strike button has been clicked twice and the foul button is clicked", () => {
    const { getByTestId } = render(<Display />);
    const foulButton = getByTestId("foul-button");
    const strikeButton = getByTestId("strike-button");
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0");
    clickMe(2, strikeButton);
    expect(strikes.textContent).toBe("2");
    clickMe(1, foulButton);
    expect(strikes.textContent).toBe("2");
    clickMe(2, foulButton);
    expect(strikes.textContent).toBe("2");
  });
  test("should increase strikes value to 2 when foul button is clicked twice and then strikes value should reset to 0 if the strike button is clicked", () => {
    const { getByTestId } = render(<Display />);
    const foulButton = getByTestId("foul-button");
    const strikeButton = getByTestId("strike-button");
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0");
    clickMe(2, foulButton);
    expect(strikes.textContent).toBe("2");
    clickMe(1, strikeButton);
    expect(strikes.textContent).toBe("0");
  });
  test("should reset the balls value and strike value to 0 when the hit button is clicked", () => {
    const { getByTestId } = render(<Display />);
    const ballsButton = getByTestId("ball-button");
    const strikeButton = getByTestId("strike-button");
    const foulButton = getByTestId("foul-button");
    const hitButton = getByTestId("hit-button");
    const balls = getByTestId("balls");
    const strikes = getByTestId("strikes");
    expect(strikes.textContent).toBe("0");
    expect(balls.textContent).toBe("0");
    clickMe(2, ballsButton);
    expect(balls.textContent).toBe("2");
    clickMe(1, strikeButton);
    expect(strikes.textContent).toBe("1");
    clickMe(1, foulButton);
    expect(strikes.textContent).toBe("2");
    expect(balls.textContent).toBe("2");
    clickMe(1, hitButton);
    expect(strikes.textContent).toBe("0");
    expect(balls.textContent).toBe("0");
  });
});
