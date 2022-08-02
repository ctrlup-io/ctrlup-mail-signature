import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe(App.name, () => {
  it("renders a name input", () => {
    const { getByText } = render(<App />);
    const inputNameElement = getByText(/John Doe/i);
    expect(inputNameElement).toBeInTheDocument();
  });

  it("renders a title input", () => {
    const { getByText } = render(<App />);
    const inputTitleElement = getByText(/Super hero/i);
    expect(inputTitleElement).toBeInTheDocument();
  });

  it("renders a phone number input", () => {
    const { getByText } = render(<App />);
    const inputPhoneNumberElement = getByText(/\+3316180339/i);
    expect(inputPhoneNumberElement).toBeInTheDocument();
  });
});
