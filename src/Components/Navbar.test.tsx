import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import user from "@testing-library/user-event";
import Navbar from "./Navbar";
import App from "../App";

describe("Navbar renders correctly", () => {
  test("renders logo", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    //We expect the logo to be rendered correctly
    expect(
      screen.getByRole("img", {
        name: /lm/i,
      })
    ).toBeInTheDocument();
  });

  test("renders about", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    //We expect the about link to be rendered correctly
    expect(
      screen.getByRole("link", {
        name: /about/i,
      })
    ).toBeInTheDocument();
  });

  test("renders Resume", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    //We expect the resume link to be rendered correctly
    expect(
      screen.getByRole("link", {
        name: /resume/i,
      })
    ).toBeInTheDocument();
  });
});

describe("Navbar user interactions", () => {
  test("renders about page when about is clicked on navbar", async () => {
    user.setup();

    //* Renders Home page
    render(<App />, { wrapper: BrowserRouter });

    // verify page content for default route
    expect(
      screen.getByRole("img", {
        name: /an image of lesedi molemi/i,
      })
    ).toBeInTheDocument();

    //simulate user clicking the about button on navbar
    await user.click(
      screen.getByRole("link", {
        name: /about/i,
      })
    );

    //expect the about me text to show since we are on the about page
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  test("renders resume page when resume is clicked on navbar", async () => {
    user.setup();

    //* Renders the About page not the Home page
    render(<App />, { wrapper: BrowserRouter });

    // verify page content for default route
    expect(
      screen.getByRole("link", {
        name: /about/i,
      })
    ).toBeInTheDocument();

    //simulate user clicking the about button on navbar
    await user.click(
      screen.getByRole("link", {
        name: /resume/i,
      })
    );

    //expect the about me text to show since we are on the about page
    expect(
      screen.getByRole("heading", {
        name: /ctu training solutions \- pretoria/i,
      })
    ).toBeInTheDocument();
  });
});
