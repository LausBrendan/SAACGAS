import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("Home component", () => {
  test("renders heading, description, and no rows initially", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<Home />);

    expect(screen.getByText("Welcome to SAACGAIS")).toBeInTheDocument();
    expect(screen.getByText("This is the home page.")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText("No rows found.")).toBeInTheDocument()
    );
  });

  test("renders rows from API", async () => {
    const mockRows = [
      { test_id: 1, test: "Row 1" },
      { test_id: 2, test: "Row 2" },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockRows,
    });

    render(<Home />);

    for (const row of mockRows) {
      await waitFor(() =>
        expect(screen.getByText(`${row.test_id}: ${row.test}`)).toBeInTheDocument()
      );
    }
  });

  test("adds a new row when button is clicked", async () => {
    const initialRows = [{ test_id: 1, test: "Existing row" }];
    const newRow = { test_id: 2, test: "Hello from React!" };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => initialRows,
    });

    render(<Home />);

    await waitFor(() =>
      expect(screen.getByText("1: Existing row")).toBeInTheDocument()
    );

    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => newRow,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [...initialRows, newRow],
      });

    fireEvent.click(screen.getByText("Add New Row"));

    await waitFor(() =>
      expect(screen.getByText("2: Hello from React!")).toBeInTheDocument()
    );
  });
});
