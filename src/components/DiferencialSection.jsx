"use client";

import { motion } from "motion/react";
import { LineShadowText } from "./ui/line-shadow-text";
import { Highlighter } from "@/components/ui/highlighter";

export function DiferencialSection() {
  return (
    <section className="py-20 w-full flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="md:max-w-2/3 md:px-0 px-10">
        <motion.h1
          className="font-bold text-3xl md:text-5xl pb-4 text-center"
          initial={{ opacity: 0, scale: 0.6, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
        >
          ¿Cual es nuestro <LineShadowText>Diferencial</LineShadowText>?
        </motion.h1>
        <motion.span
          className="font-medium text-2xl text-center block"
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.25,
          }}
        >
          No solo desarrollamos productos que utilizan{" "}
          <Highlighter isView="true" animationDuration={1000} color="#008dd7">
            IA para automatizar
          </Highlighter>{" "}
          y mejorar el rendimiento, sino también desarrollamos{" "}
          <Highlighter
            isView="true"
            animationDuration={1000}
            color="#008dd7"
            padding={0}
            action="underline"
          >
            con IA
          </Highlighter>{" "}
          para entregar valor en tiempo record e{" "}
          <Highlighter
            isView="true"
            animationDuration={1000}
            color="#008dd7"
            action="circle"
          >
            iterar
          </Highlighter>{" "}
          junto a nuestro cliente para realmente solucionar los problemas que
          nos proponemos.
        </motion.span>
      </div>
    </section>
  );
}
