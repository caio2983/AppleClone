/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import * as React from "react";

it("holiday video should start automatically when page loads", async () => {
  render(<Home></Home>);

  await screen.getByRole("video");

  expect(screen.getByRole("video")).toHaveAttribute("autoplay");
});

it("holiday video should not loop", async () => {
  render(<Home></Home>);

  await screen.getByRole("video");

  expect(screen.getByRole("video")).not.toHaveAttribute("loop");
});
