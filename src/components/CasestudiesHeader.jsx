"use client";

import { motion } from "framer-motion";

export function CasestudiesHeader() {
  return (
    <div className="mb-12 text-center md:mb-16 lg:mb-20 overflow-hidden">
      <motion.h2
        className="mb-4 font-bold text-3xl text-zinc-900 tracking-tight dark:text-white sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
      >
        Casos de estudio
      </motion.h2>
      <motion.p
        className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 12,
          delay: 0.15,
        }}
      >
        Transformando la operativa de negocios
      </motion.p>
    </div>
  );
}
