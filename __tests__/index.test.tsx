import { vi, describe, expect, it, test } from "vitest";
import { screen, render } from "@testing-library/react";
import HomeClient from "@/components/clientSide/HomeClient";

describe("Mobile specific tests", () => {
  it("should render 'tap anywhere' text", () => {
    render(<HomeClient />);
    expect(
      screen.getByRole("paragraph", { name: "Tap anywhere" })
    ).toBeDefined();
  });
});
