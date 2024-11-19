import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkPage from "@/app/(routes)/work/page";
import WorkCard from "@/components/WorkCard";

describe("Work Page specific tests", () => {
  it("should render the main heading", () => {
    render(<WorkPage />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Products, I've built.",
      })
    ).toBeInTheDocument();
  });

  it("should render the title, and description. Also renders preview image onHover.", () => {
    const data = {
      id: "120",
      link: "https://devunity.netlify.app/",
      title: "DevUnity",
      preview: "/assets/work/devUnity.png",
      desc: "A multi-user coding platform.",
    };
    render(<WorkCard data={data} />);

    expect(screen.getByRole("link", { name: /DevUnity/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: data.title })
    ).toBeInTheDocument();
    expect(screen.getByText(data.desc).textContent).toBeDefined();
  });
});
