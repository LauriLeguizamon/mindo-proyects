"use client";

import { useMemo } from "react";

export function GradualBlur({
  position = "bottom",
  blurStrength = 64,
  height = 100,
  divisions = 8,
  opacity = 1,
  fixed = false,
  className = "",
  style = {},
}) {
  const positionStyles = useMemo(() => {
    const positions = {
      top: {
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "column",
      },
      bottom: {
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "column-reverse",
      },
      left: {
        top: 0,
        left: 0,
        bottom: 0,
        flexDirection: "row",
      },
      right: {
        top: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row-reverse",
      },
    };
    return positions[position] || positions.bottom;
  }, [position]);

  const isVertical = position === "top" || position === "bottom";

  const layers = useMemo(() => {
    return Array.from({ length: divisions }, (_, i) => {
      const progress = (i + 1) / divisions;
      const blur = blurStrength * Math.pow(progress, 2);
      const layerSize = height / divisions;

      // Create gradient mask - each layer only shows through its slice
      const gradientDirection =
        position === "bottom"
          ? "to top"
          : position === "top"
            ? "to bottom"
            : position === "left"
              ? "to right"
              : "to left";

      const start = (i / divisions) * 100;
      const end = ((i + 1) / divisions) * 100;

      return {
        blur,
        layerSize,
        maskImage: `linear-gradient(${gradientDirection},
          transparent ${start}%,
          black ${start}%,
          black ${end}%,
          transparent ${end}%)`,
      };
    });
  }, [divisions, blurStrength, height, position]);

  const containerSize = isVertical
    ? { height: `${height}px`, width: "100%" }
    : { width: `${height}px`, height: "100%" };

  return (
    <div
      className={`pointer-events-none ${fixed ? "fixed" : "absolute"} ${className}`}
      style={{
        ...positionStyles,
        ...containerSize,
        opacity,
        zIndex: 50,
        ...style,
      }}
    >
      {layers.map((layer, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: layer.maskImage,
            WebkitMaskImage: layer.maskImage,
          }}
        />
      ))}
    </div>
  );
}

export default GradualBlur;
