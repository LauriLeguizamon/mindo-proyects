"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "¿Qué tipo de soluciones de IA ofrecen?",
    answer:
      "Desarrollamos Agentes de IA inteligentes, automatización de procesos, OCR custom, ERP's potenciados con IA. Cada proyecto se adapta a las necesidades específicas de tu negocio.",
  },
  {
    id: "faq-2",
    question: "¿Cuánto tiempo toma implementar una solución de IA?",
    answer:
      "La velocidad es nuestra mejor virtud, todos los proyectos están listos en tiempo record.",
  },
  {
    id: "faq-3",
    question:
      "¿Necesito tener conocimientos técnicos para trabajar con ustedes?",
    answer:
      "No es necesario. Nos encargamos de todo el proceso técnico y te explicamos cada paso en términos claros. Nuestro objetivo es que entiendas cómo funciona tu solución sin necesidad de ser experto en tecnología. Pero también nos integramos con tu equipo técnico si hace falta.",
  },
  {
    id: "faq-5",
    question: "¿Ofrecen soporte después de la implementación?",
    answer:
      "Sí, en todos nuestros proyectos ofrecemos soporte continuo y mantenimiento. Además, ofrecemos capacitación para tu equipo y actualizaciones periódicas para mantener tu solución optimizada.",
  },
  {
    id: "faq-6",
    question: "¿Cuál es el proceso para comenzar un proyecto?",
    answer:
      "Comenzamos con una consulta inicial gratuita donde entendemos tus necesidades. Luego realizamos un análisis de requerimientos, presentamos una propuesta detallada, y una vez aprobada, iniciamos el desarrollo e implementación con iteraciones veloces.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full bg-neutral-50 py-20 dark:bg-neutral-950 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16 overflow-hidden">
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
            Preguntas Frecuentes
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
            Todo lo que necesitas saber sobre nuestros servicios
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.2,
          }}
        >
          <Accordion type="single">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                }}
              >
                <AccordionItem value={faq.id}>
                  <AccordionTrigger value={faq.id}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent value={faq.id}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
