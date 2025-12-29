"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#casos-de-estudio", label: "Casos de Estudio" },
  { href: "/#tecnologias", label: "Tecnologías" },
  { href: "/#faq", label: "FAQ" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function MobileMenu({ isOpen, onClose }) {
  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
              <Link href="/">
                <Image
                  src="/icons/mindo-logo.png"
                  alt="Mindo"
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-neutral-700" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                >
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-2xl font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => onClose()}
                      className="text-2xl font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
              >
                <a
                  href="https://wa.me/+5492235351858"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contáctanos
                </a>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
