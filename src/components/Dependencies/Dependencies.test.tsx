import React from "react";
import { render } from "@testing-library/react";

import Dependencies from "./Dependencies";

describe("Dependencies", () => {
  test("renders the Dependencies component", () => {
    render(<Dependencies package={{}} />);
  });
});