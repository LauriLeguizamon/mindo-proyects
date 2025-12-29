"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code2, Server, Brain, Zap, Palette } from "lucide-react";

const technologies = [
  {
    title: "Frontend",
    description:
      "Desarrollo de interfaces modernas y responsivas con las mejores tecnologías del mercado.",
    techIcons: [
      { src: "/icons/nextjs.svg", alt: "Next.js" },
      { src: "/icons/react.svg", alt: "React" },
      { src: "/icons/angular.svg", alt: "Angular" },
    ],
    icon: <Code2 className="h-6 w-6" style={{ color: "#038dd7" }} />,
    className: "md:col-span-1",
  },
  {
    title: "Backend",
    description:
      "APIs robustas y escalables construidas con Python y sus frameworks más potentes.",
    techIcons: [
      { src: "/icons/python.svg", alt: "Python" },
      { src: "/icons/django.svg", alt: "Django" },
      { src: "/icons/flask.svg", alt: "Flask" },
    ],
    icon: <Server className="h-6 w-6" style={{ color: "#038dd7" }} />,
    className: "md:col-span-1",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Integraciones con los modelos de IA más avanzados y frameworks de orquestación.",
    techIcons: [
      { src: "/icons/langchain.svg", alt: "LangChain" },
      { src: "/icons/langgraph.svg", alt: "LangGraph" },
      { src: "/icons/claude.svg", alt: "Claude SDK" },
      { src: "/icons/openai.svg", alt: "OpenAI SDK" },
    ],
    icon: <Brain className="h-6 w-6" style={{ color: "#038dd7" }} />,
    className: "md:col-span-1",
  },
  {
    title: "Claude Code",
    description:
      "Desarrollo acelerado con IA. Iteramos y entregamos valor en tiempo record utilizando las herramientas más avanzadas.",
    techIcons: [{ src: "/icons/claude.svg", alt: "Claude Code" }],
    icon: <Zap className="h-6 w-6" style={{ color: "#038dd7" }} />,
    className: "md:col-span-2",
  },
  {
    title: "Design",
    description:
      "Componentes entendibles, usables y de rápida construcción. Diseño que escala.",
    techIcons: [
      { src: "/icons/tailwind.svg", alt: "Tailwind" },
      { src: "/icons/shadcn.svg", alt: "shadcn/ui" },
    ],
    icon: <Palette className="h-6 w-6" style={{ color: "#038dd7" }} />,
    className: "md:col-span-1",
  },
];

const TechHeader = ({ techIcons }) => (
  <div
    className="flex h-full min-h-[6rem] w-full flex-wrap items-center justify-center gap-4 rounded-xl p-4"
    style={{ backgroundColor: "rgba(3, 141, 215, 0.15)" }}
  >
    {techIcons.map((icon) => (
      <div
        key={icon.alt}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 p-2 shadow-sm dark:bg-neutral-800/80"
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      </div>
    ))}
  </div>
);

export function TecnologiasSection() {
  return (
    <section id="tecnologias" className="relative w-full py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <motion.h2
            className="mb-4 font-bold text-3xl text-zinc-900 tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
          >
            Tecnologías
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-zinc-600"
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
            Las herramientas que usamos para construir soluciones excepcionales
          </motion.p>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              className={tech.className}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
            >
              <BentoGridItem
                title={tech.title}
                description={tech.description}
                header={<TechHeader techIcons={tech.techIcons} />}
                icon={tech.icon}
                className="h-full"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
