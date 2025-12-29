"use client";

import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = createContext();

export function Accordion({ children, type = "single", className }) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        if (type === "single") {
          newSet.clear();
        }
        newSet.add(value);
      }
      return newSet;
    });
  };

  const isOpen = (value) => openItems.has(value);

  return (
    <AccordionContext.Provider value={{ toggleItem, isOpen }}>
      <div className={cn("flex flex-col gap-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, value, className }) {
  const { isOpen } = useContext(AccordionContext);
  const open = isOpen(value);

  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white/50 backdrop-blur-sm overflow-hidden transition-colors",
        open && "border-neutral-300 bg-white/80",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AccordionTrigger({ children, value, className }) {
  const { toggleItem, isOpen } = useContext(AccordionContext);
  const open = isOpen(value);

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between px-6 py-5 text-left font-medium text-neutral-900 transition-colors hover:text-neutral-700",
        className
      )}
      aria-expanded={open}
    >
      <span className="pr-4">{children}</span>
      <motion.div
        animate={{ rotate: open ? 180 : 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="flex-shrink-0"
      >
        <ChevronDown className="h-5 w-5 text-neutral-500" />
      </motion.div>
    </button>
  );
}

export function AccordionContent({ children, value, className }) {
  const { isOpen } = useContext(AccordionContext);
  const open = isOpen(value);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: {
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
            opacity: {
              duration: 0.2,
            },
          }}
          className="overflow-hidden"
        >
          <div className={cn("px-6 pb-5 text-neutral-600", className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
