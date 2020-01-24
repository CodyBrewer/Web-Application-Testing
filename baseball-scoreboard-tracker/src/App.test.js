import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Display from "./components/Display";

afterEach(cleanup);

describe("App", () => {
  test("should render without crashing", () => {
    render(<App />);
  });
  test("should render Display component without crashing", () => {
    render(<Display />);
  });
});
