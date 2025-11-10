import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders brand title and navigation buttons", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Brand title
    const brand = screen.getByText("SAACGAIS");
    expect(brand).toBeInTheDocument();
    expect(brand.closest("a")).toHaveAttribute("href", "/");

    // Navigation links (MUI Button with component={Link} becomes <a>)
    const homeLink = screen.getByRole("link", { name: "Home" });
    const uploadLink = screen.getByRole("link", { name: "Upload" });
    const aboutLink = screen.getByRole("link", { name: "About" });

    expect(homeLink).toBeInTheDocument();
    expect(uploadLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute("href", "/");
    expect(uploadLink).toHaveAttribute("href", "/upload");
    expect(aboutLink).toHaveAttribute("href", "/about");
  });
});
