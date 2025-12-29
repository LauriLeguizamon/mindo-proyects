"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function ImageDialog({
  isOpen,
  onClose,
  currentIndex,
  steps,
  onPrev,
  onNext,
}) {
  const currentStep = steps[currentIndex];
  const hasMultiple = steps.length > 1;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) onPrev();
      if (e.key === "ArrowRight" && hasMultiple) onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext, hasMultiple]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 mx-4 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex items-center gap-3">
                {hasMultiple && (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {currentIndex + 1}
                  </span>
                )}
                <div>
                  <h3 className="font-semibold text-foreground">
                    {currentStep.title}
                  </h3>
                  {hasMultiple && (
                    <span className="text-xs text-muted-foreground">
                      Paso {currentIndex + 1} de {steps.length}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Description */}
            <div className="border-b border-border px-4 py-3">
              <p className="text-sm text-muted-foreground">
                {currentStep.description}
              </p>
            </div>

            {/* Image */}
            <div className="relative flex-1 overflow-auto p-4">
              <div className="relative w-full">
                <Image
                  src={currentStep.image}
                  alt={currentStep.title}
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-lg border border-border"
                  priority
                />
              </div>
            </div>

            {/* Navigation */}
            {hasMultiple && (
              <div className="flex items-center justify-between border-t border-border px-4 py-3">
                <button
                  onClick={onPrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </button>

                <div className="flex gap-2">
                  {steps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const diff = idx - currentIndex;
                        if (diff > 0) {
                          for (let i = 0; i < diff; i++) onNext();
                        } else {
                          for (let i = 0; i < Math.abs(diff); i++) onPrev();
                        }
                      }}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? "w-6 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={onNext}
                  disabled={currentIndex === steps.length - 1}
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Side navigation arrows for desktop */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                disabled={currentIndex === 0}
                className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-background/90 p-3 shadow-lg transition-all hover:bg-background disabled:opacity-30 md:flex"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                disabled={currentIndex === steps.length - 1}
                className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-background/90 p-3 shadow-lg transition-all hover:bg-background disabled:opacity-30 md:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
