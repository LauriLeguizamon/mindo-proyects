"use client";

import { motion } from "motion/react";
import CardFlip from "@/components/ui/card-flip";

const services = [
  {
    title: "Agentes de IA",
    subtitle: "Asistentes inteligentes 24/7",
    description:
      "Automatiza la atención al cliente con agentes conversacionales potenciados por IA.",
    features: ["Atención 24/7", "Multicanal", "Personalizable", "Escalable"],
    colorTheme: "#ff7cc6",
  },
  {
    title: "Automatización",
    subtitle: "Optimiza tus operaciones",
    description:
      "Reduce costos y errores automatizando tareas repetitivas con IA.",
    features: [
      "Flujos automáticos",
      "Integración API",
      "Reportes",
      "Eficiencia",
    ],
    colorTheme: "blue",
  },
  {
    title: "OCR Inteligente",
    subtitle: "Digitaliza documentos",
    description:
      "Extrae información de documentos físicos y digitales con precisión.",
    features: ["Alta precisión", "Multi-formato", "Validación", "Extracción"],
    colorTheme: "emerald",
  },
  {
    title: "Consultoría IA",
    subtitle: "Estrategia a medida",
    description:
      "Te ayudamos a identificar oportunidades de IA para tu negocio.",
    features: ["Diagnóstico", "Roadmap", "Implementación", "Soporte"],
    colorTheme: "violet",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative w-full bg-white py-20 dark:bg-black md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Nuestros Servicios
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
            Soluciones de IA que impulsan tu negocio
          </motion.p>
        </div>

        <div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-4"
        >
          {services.map((service, index) => (
            <CardFlip
              key={service.title}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              features={service.features}
              colorTheme={service.colorTheme}
              ctaText="Contactar"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
