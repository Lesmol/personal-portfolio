import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

test("renders logo", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  const imgElement = screen.getByRole("img", {
    name: /lm/i,
  });
  expect(imgElement).toBeInTheDocument();
});
