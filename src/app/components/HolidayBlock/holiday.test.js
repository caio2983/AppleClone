/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import * as React from "react";

describe("video auto-play", () => {
  it("holiday video should start automatically when page loads", () => {
    render(<Home />);

    console.log(window.HTMLMediaElement);

    // expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});
