import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Navbar from "./Navbar";

test("renders logo", () => {
  render(<Navbar />);

  const imgElement = screen.getByRole("img", {
    name: /lm/i,
  });
  expect(imgElement).toBeInTheDocument();
});
