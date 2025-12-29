"use client";

import { SmoothCursor } from "@/components/ui/smooth-cursor";

export function CursorProvider({ children }) {
  return (
    <>
      <SmoothCursor />
      {children}
    </>
  );
}
