"use client";

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const colorThemes = {
  orange: {
    text: "text-orange-500",
    shadow: "shadow-[0_0_50px_rgba(255,165,0,0.5)]",
    shadowHover: "0px 8px 20px rgba(255, 165, 0, 0.5)",
    shadowEnd: "0px 10px 20px rgba(255, 165, 0, 0)",
    gradient: "from-orange-500/20 via-orange-500/10",
    hoverGradient:
      "hover:from-orange-500/10 hover:via-orange-500/5 dark:hover:from-orange-500/20 dark:hover:via-orange-500/10",
    ctaHover: "group-hover/start:text-orange-600 dark:group-hover/start:text-orange-400",
  },
  blue: {
    text: "text-blue-500",
    shadow: "shadow-[0_0_50px_rgba(59,130,246,0.5)]",
    shadowHover: "0px 8px 20px rgba(59, 130, 246, 0.5)",
    shadowEnd: "0px 10px 20px rgba(59, 130, 246, 0)",
    gradient: "from-blue-500/20 via-blue-500/10",
    hoverGradient:
      "hover:from-blue-500/10 hover:via-blue-500/5 dark:hover:from-blue-500/20 dark:hover:via-blue-500/10",
    ctaHover: "group-hover/start:text-blue-600 dark:group-hover/start:text-blue-400",
  },
  emerald: {
    text: "text-emerald-500",
    shadow: "shadow-[0_0_50px_rgba(16,185,129,0.5)]",
    shadowHover: "0px 8px 20px rgba(16, 185, 129, 0.5)",
    shadowEnd: "0px 10px 20px rgba(16, 185, 129, 0)",
    gradient: "from-emerald-500/20 via-emerald-500/10",
    hoverGradient:
      "hover:from-emerald-500/10 hover:via-emerald-500/5 dark:hover:from-emerald-500/20 dark:hover:via-emerald-500/10",
    ctaHover: "group-hover/start:text-emerald-600 dark:group-hover/start:text-emerald-400",
  },
  violet: {
    text: "text-violet-500",
    shadow: "shadow-[0_0_50px_rgba(139,92,246,0.5)]",
    shadowHover: "0px 8px 20px rgba(139, 92, 246, 0.5)",
    shadowEnd: "0px 10px 20px rgba(139, 92, 246, 0)",
    gradient: "from-violet-500/20 via-violet-500/10",
    hoverGradient:
      "hover:from-violet-500/10 hover:via-violet-500/5 dark:hover:from-violet-500/20 dark:hover:via-violet-500/10",
    ctaHover: "group-hover/start:text-violet-600 dark:group-hover/start:text-violet-400",
  },
};

export default function CardFlip({
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
  ctaText = "Contactar",
  colorTheme = "orange",
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const theme = colorThemes[colorTheme] || colorThemes.orange;

  return (
    <div
      className="group relative h-[320px] w-full max-w-[280px] [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-zinc-50 dark:bg-zinc-900",
            "border border-zinc-200 dark:border-zinc-800/50",
            "shadow-xs dark:shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-lg dark:group-hover:shadow-xl",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
            <div className="absolute inset-0 flex items-start justify-center pt-24">
              <div className="relative flex h-[100px] w-[200px] items-center justify-center">
                {[...Array(10)].map((_, i) => (
                  <div
                    className={cn(
                      "absolute h-[50px] w-[50px]",
                      "rounded-[140px]",
                      "opacity-0",
                      theme.shadow,
                      "animate-[scale_2s_linear_infinite]"
                    )}
                    key={i}
                    style={{
                      animationDelay: `${i * 0.3}s`,
                      "--shadow-hover": theme.shadowHover,
                      "--shadow-end": theme.shadowEnd,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="font-semibold text-lg text-zinc-900 leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] dark:text-white">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm text-zinc-600 tracking-tight transition-all delay-[50ms] duration-500 ease-out-expo group-hover:translate-y-[-4px] dark:text-zinc-200">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                    "bg-gradient-to-br to-transparent",
                    theme.gradient
                  )}
                />
                <Repeat2
                  className={cn(
                    "group-hover/icon:-rotate-12 relative z-10 h-4 w-4 transition-transform duration-300 group-hover/icon:scale-110",
                    theme.text
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-2xl p-6",
            "bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black",
            "border border-zinc-200 dark:border-zinc-800",
            "shadow-xs dark:shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-lg dark:group-hover:shadow-xl",
            isFlipped ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-zinc-900 leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] dark:text-white">
                {title}
              </h3>
              <p className="line-clamp-2 text-sm text-zinc-600 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] dark:text-zinc-400">
                {description}
              </p>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  className="flex items-center gap-2 text-sm text-zinc-700 transition-all duration-500 dark:text-zinc-300"
                  key={feature}
                  style={{
                    transform: isFlipped
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <ArrowRight className={cn("h-3 w-3", theme.text)} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-zinc-200 border-t pt-6 dark:border-zinc-800">
            <div
              className={cn(
                "group/start relative",
                "flex items-center justify-between",
                "-m-3 rounded-xl p-3",
                "transition-all duration-300",
                "bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-100",
                "dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800",
                "hover:from-0% hover:via-100% hover:to-100% hover:to-transparent",
                "dark:hover:from-0% dark:hover:via-100% dark:hover:to-100% dark:hover:to-transparent",
                theme.hoverGradient,
                "hover:scale-[1.02] hover:cursor-pointer"
              )}
            >
              <span
                className={cn(
                  "font-medium text-sm text-zinc-900 transition-colors duration-300 dark:text-white",
                  theme.ctaHover
                )}
              >
                {ctaText}
              </span>
              <div className="group/icon relative">
                <div
                  className={cn(
                    "absolute inset-[-6px] rounded-lg transition-all duration-300",
                    "bg-gradient-to-br to-transparent",
                    theme.gradient,
                    "scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100"
                  )}
                />
                <ArrowRight
                  className={cn(
                    "relative z-10 h-4 w-4 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110",
                    theme.text
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale {
          0% {
            transform: scale(2);
            opacity: 0;
            box-shadow: 0px 0px 50px var(--shadow-hover);
          }
          50% {
            transform: translate(0px, -5px) scale(1);
            opacity: 1;
            box-shadow: var(--shadow-hover);
          }
          100% {
            transform: translate(0px, 5px) scale(0.1);
            opacity: 0;
            box-shadow: var(--shadow-end);
          }
        }
      `}</style>
    </div>
  );
}
