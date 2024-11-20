import React from "react";
import { render } from "@testing-library/react";
import HomePage from '../src/pages/index';

describe("example page", () => {
  it("renders without errors", async () => {
    expect.assertions(0);

    render(<HomePage />);
  });
});
