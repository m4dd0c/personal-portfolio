"use client";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

export const Graph = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });
  return (
    <div className="relative">
      <GitHubCalendar
        username="m4dd0c"
        colorScheme="dark"
        renderBlock={(block, activity) => {
          if (!activity) return block;

          return React.cloneElement(block, {
            onMouseEnter: (e: React.MouseEvent<SVGRectElement>) => {
              const rect = (e.target as SVGRectElement).getBoundingClientRect();
              const date = new Date(activity.date);
              const month = date.toLocaleString("en-US", { month: "long" });
              const day = date.getDate();
              const weekday = date.toLocaleString("en-US", {
                weekday: "short",
              });

              setTooltip({
                visible: true,
                x: rect.x + rect.width / 2,
                y: rect.y - 30,
                text: `${activity.count} contribution${
                  activity.count !== 1 ? "s" : ""
                } on ${weekday}, ${month} ${day}`,
              });
            },
            onMouseLeave: () => setTooltip((t) => ({ ...t, visible: false })),
          });
        }}
      />

      {tooltip.visible && (
        <div
          className="pointer-events-none fixed z-50 transform -translate-x-1/2"
          style={{
            top: tooltip.y,
            left: tooltip.x,
          }}
        >
          <div className="bg-[#010409] border border-[#30363d] text-[#c9d1d9] text-xs px-2 py-1 rounded-md shadow-lg font-medium">
            {tooltip.text}
          </div>
        </div>
      )}
    </div>
  );
};
