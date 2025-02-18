"use client";

import { CSSProperties, ReactNode } from "react";

const layoutStyle: CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div style={layoutStyle}>
      <div className="text-[300%] font-bold">
        搜<sup>"</sup>
        <span className="text-gray-500">嗖嗖嗖</span>
        <sub>"</sub>
      </div>
      {children}
    </div>
  );
}
