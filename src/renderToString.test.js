import { styled } from "@material-ui/core/styles";
import React from "react";

import renderToString from "./renderToString";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const Button = styled("button")({
  background: "red",
});

describe("renderToString", () => {
  it("renders correctly", () => {
    expect(renderToString(<Button>Add</Button>)).toMatchSnapshot();
  });
});
