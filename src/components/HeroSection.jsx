"use client";

import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Highlighter } from "@/components/ui/highlighter";

export function HeroSection() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(255, 255, 255)"
      gradientBackgroundEnd="rgb(240, 248, 255)"
      firstColor="173, 216, 230"
      secondColor="76, 170, 220"
      thirdColor="130, 211, 255"
      fourthColor="200, 230, 255"
      fifthColor="224, 240, 255"
      pointerColor="176, 224, 230"
      blendingValue="hard-light"
      containerClassName="min-h-screen"
      className="absolute inset-0 z-10 flex items-center justify-center"
    >
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          El equipo que entrega{" "}
          <Highlighter
            color="#008dd7"
            animationDuration={1200}
            strokeWidth="1px"
            iterations={4}
            padding={0}
          >
            soluciones IA
          </Highlighter>{" "}
          en producción,{" "}
          <Highlighter
            color="#008dd7"
            action="underline"
            animationDuration={2000}
            iterations={4}
          >
            en tiempo record
          </Highlighter>
        </h1>
        <motion.p
          className="text-lg md:text-xl text-black/70 mb-8 max-w-2xl mx-auto font-serif italic"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.3,
          }}
        >
          No todo se resuelve con IA. Pero cuando sí, lo hacemos bien.
        </motion.p>
        <motion.div
          className="flex justify-center cursor-pointer"
          initial={{ opacity: 0, scale: 0, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.6,
          }}
        >
          <a
            href="https://wa.me/+5492235351858"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NoiseBackground
              containerClassName="w-fit p-2 rounded-full mx-auto"
              gradientColors={
                [
                  // "rgb(255, 100, 150)",
                  // "rgb(100, 150, 255)",
                  // "rgb(255, 200, 100)",
                ]
              }
            >
              <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                Hablemos &rarr;
              </button>
            </NoiseBackground>
          </a>
        </motion.div>
      </div>
    </BackgroundGradientAnimation>
  );
}
