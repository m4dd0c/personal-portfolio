import React from "react";
import { vi, describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import HomeClient from "../components/clientSide/HomeClient";
import * as utils from "../utils/isDesktop";

vi.mock("../utils/isDesktop.tsx", () => {
  return {
    isDesktop: vi.fn(),
  };
});

describe("Mobile specific tests", () => {
  it("should render 'Tap anywhere' text", () => {
    vi.spyOn(utils, "isDesktop").mockReturnValue(false);
    render(<HomeClient />);
    expect(screen.getByText("Tap anywhere")).toBeInTheDocument();
  });
});
