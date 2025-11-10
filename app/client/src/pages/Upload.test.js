import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Upload from "./Upload";

// Mock the MessageInput component
jest.mock("../components/MessageInput.js", () => (props) => {
  return (
    <div>
      <input
        aria-label="Type a message"
        onKeyDown={(e) => {
          if (e.key === "Enter") props.onSend(e.target.value);
        }}
      />
      <button onClick={() => props.onSend("Test message")}>Send</button>
    </div>
  );
});

describe("Upload component", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders heading and description", () => {
    render(<Upload />);
    expect(screen.getByText("Upload Documents")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Uploading documents and other information will be done here."
      )
    ).toBeInTheDocument();
  });

  test("displays AI reply after sending a message", async () => {
    const mockReply = { reply: "Hello from AI!" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockReply,
    });

    render(<Upload />);

    const input = screen.getByLabelText("Type a message");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", target: { value: "Hi AI" } });

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() =>
      expect(
        screen.getByText((content) => content.includes("Hello from AI!"))
      ).toBeInTheDocument()
    );

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  test("displays error if API fails", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Something went wrong" }),
    });

    render(<Upload />);

    const input = screen.getByLabelText("Type a message");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", target: { value: "Hi AI" } });

    await waitFor(() =>
      expect(
        screen.getByText((content) => content.includes("Error: Something went wrong"))
      ).toBeInTheDocument()
    );
  });

  test("displays network error if fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Network failure"));

    render(<Upload />);

    const input = screen.getByLabelText("Type a message");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", target: { value: "Hi AI" } });

    await waitFor(() =>
      expect(
        screen.getByText((content) => content.includes("Network error: Network failure"))
      ).toBeInTheDocument()
    );
  });
});
