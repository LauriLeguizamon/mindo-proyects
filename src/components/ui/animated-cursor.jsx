"use client";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function BlendModeCursor() {
  return (
    <AnimatedCursor
      color="255, 255, 255"
      innerSize={4}
      outerSize={40}
      innerScale={1}
      outerScale={1.7}
      outerAlpha={1}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
      innerStyle={{
        mixBlendMode: "exclusion",
      }}
    />
  );
}
