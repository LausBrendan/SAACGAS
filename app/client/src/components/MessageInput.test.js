import { render, screen, fireEvent } from "@testing-library/react";
import MessageInput from "./MessageInput";

describe("MessageInput component", () => {
  let onSend;

  beforeEach(() => {
    onSend = jest.fn();
    render(<MessageInput onSend={onSend} />);
  });

  test("calls onSend when Enter is pressed", () => {
    const input = screen.getByLabelText("Type a message");

    fireEvent.change(input, { target: { value: "Hello world" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onSend).toHaveBeenCalledTimes(1);
    expect(onSend).toHaveBeenCalledWith("Hello world");
    expect(input.value).toBe("");
  });

  test("calls onSend when Send button is clicked", () => {
    const input = screen.getByLabelText("Type a message");
    const button = screen.getByRole("button", { name: "Send" });

    fireEvent.change(input, { target: { value: "Test message" } });
    fireEvent.click(button);

    expect(onSend).toHaveBeenCalledTimes(1);
    expect(onSend).toHaveBeenCalledWith("Test message");
    expect(input.value).toBe("");
  });

  test("does not call onSend if input is empty", () => {
    const input = screen.getByLabelText("Type a message");
    const button = screen.getByRole("button", { name: "Send" });

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onSend).not.toHaveBeenCalled();

    fireEvent.click(button);
    expect(onSend).not.toHaveBeenCalled();
  });
});
