"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { ImageDialog } from "./ImageDialog";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function StepCarousel({ steps }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openDialog = (index) => {
    setCurrentIndex(index);
    setDialogOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(steps.length - 1, prev + 1));
  };

  return (
    <div className="my-8">
      <div className="mb-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <ChevronLeft className="h-4 w-4" />
        <span>Deslizá para ver cada paso del proceso</span>
        <ChevronRight className="h-4 w-4" />
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          autoplay={false}
          className="rounded-lg"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 border-b border-border">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-4 text-sm text-muted-foreground">{step.description}</p>
                  <button
                    onClick={() => openDialog(index)}
                    className="group relative block w-full overflow-hidden rounded-lg border border-border transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover object-top transition-transform group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
                      <span className="flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-medium opacity-0 shadow-lg transition-all group-hover:opacity-100">
                        <ZoomIn className="h-4 w-4" />
                        Ver más grande
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border shadow-lg transition-colors hover:bg-muted">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border shadow-lg transition-colors hover:bg-muted">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="swiper-pagination-custom mt-4 flex justify-center gap-2" />

      <ImageDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        currentIndex={currentIndex}
        steps={steps}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: hsl(var(--muted-foreground));
          opacity: 0.3;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          opacity: 1;
          background: hsl(var(--primary));
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
