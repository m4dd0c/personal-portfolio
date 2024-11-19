import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "@/app/(routes)/contact/page";

describe("Contact Page specific tests", () => {
  it("should render the main heading", () => {
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "let's make something great",
      })
    ).toBeInTheDocument();
  });
});
