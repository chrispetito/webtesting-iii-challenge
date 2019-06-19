// Test away!
import React from "react";
import { render, toHaveClass } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Display from "./Display";
import "jest-dom/extend-expect";

describe("<Display />", () => {
  it("display renders without crashing", () => {
    render(<Display />);
  });
  it("displays Closed and Locked when closed and locked are true", () => {
    const { getByTestId } = render(<Display closed={true} locked={true} />);
    const closed = getByTestId("closed");
    const locked = getByTestId("locked");
    expect(closed.textContent).toBe("Closed");
    expect(locked.textContent).toBe("Locked");
  });
  it("displays Open and Unlocked when closed and locked are false", () => {
    const { getByTestId } = render(<Display closed={!true} locked={!true} />);
    const closed = getByTestId("closed");
    const locked = getByTestId("locked");
    expect(closed.textContent).toBe("Open");
    expect(locked.textContent).toBe("Unlocked");
  });
  it("uses the red-led class when locked and closed are true", () => {
    const { getByTestId } = render(<Display closed={true} locked={true} />);
    const closed = getByTestId("closed");
    const locked = getByTestId("locked");
    expect(locked).toHaveClass("red-led");
    expect(closed).toHaveClass("red-led");
  });
  it("uses the green-led class when unlocked and closed are true", () => {
    const { getByTestId } = render(<Display closed={!true} locked={!true} />);
    const closed = getByTestId("closed");
    const locked = getByTestId("locked");
    expect(closed).toHaveClass("green-led");
    expect(locked).toHaveClass("green-led");
  });
});
