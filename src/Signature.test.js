import React from "react";
import { render } from "@testing-library/react";

import Signature from "./Signature";

describe(Signature.name, () => {
  it("renders name", () => {
    const { getByText } = render(<Signature name="John Doe" />);
    const inputNameElement = getByText(/John Doe/i);
    expect(inputNameElement).toBeInTheDocument();
  });

  it("renders title", () => {
    const { getByText } = render(<Signature title="Super hero" />);
    const inputTitleElement = getByText(/Super hero/i);
    expect(inputTitleElement).toBeInTheDocument();
  });

  it("renders phone number", () => {
    const { getByText } = render(<Signature tel="+3316180339" />);
    const inputPhoneNumberElement = getByText(/\+3316180339/i);
    expect(inputPhoneNumberElement).toBeInTheDocument();
  });
});
