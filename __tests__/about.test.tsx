import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/(routes)/about/page";

describe("About Page specific tests", () => {
  it("should render the main heading", () => {
    render(<AboutPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /I design & build Digital Products/i,
      })
    ).toBeInTheDocument();
  });

  it("should render all the links", () => {
    render(<AboutPage />);
    expect(screen.getByRole("link", { name: "ISTJ-A" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "My resume (pdf 74kb)" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "m4dd0c." })).toBeInTheDocument();
  });

  it("should render an image", () => {
    render(<AboutPage />);
    expect(screen.getByRole("img", { name: "aboutPic" })).toBeInTheDocument();
  });
});
