"use client";

import { useState, useRef, useCallback } from "react";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { ArrowLeft, Video, Image } from "lucide-react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function CaseStudyHero({ caseStudy }) {
  const hasVideo = Boolean(caseStudy.videoUrl);
  const hasPhotos = caseStudy.photos?.length > 0;
  const showToggle = hasVideo && hasPhotos;

  const [activeView, setActiveView] = useState(hasVideo ? "video" : "photos");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = useCallback((swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }, []);

  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Link
          href="/casos-de-estudio"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a casos de estudio
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src={caseStudy.logo}
                alt={caseStudy.company}
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{caseStudy.company}</h2>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.industry}
                </p>
              </div>
              {caseStudy.partnership && (
                <>
                  <span className="text-xl text-muted-foreground">×</span>
                  <img
                    src={caseStudy.partnership.logo}
                    alt={caseStudy.partnership.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">
                      {caseStudy.partnership.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">Partner</p>
                  </div>
                </>
              )}
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {caseStudy.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {caseStudy.title}
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl">
              {caseStudy.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Toggle UI - only show if both media types exist */}
            {showToggle && (
              <div className="absolute top-4 right-4 z-10 flex gap-1 rounded-lg bg-background/80 p-1 backdrop-blur-sm">
                <button
                  onClick={() => setActiveView("video")}
                  className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeView === "video"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Video className="h-4 w-4" />
                  Video
                </button>
                <button
                  onClick={() => setActiveView("photos")}
                  className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeView === "photos"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Image className="h-4 w-4" />
                  Fotos
                </button>
              </div>
            )}

            {/* Video view */}
            {activeView === "video" && hasVideo && (
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc={caseStudy.videoUrl}
                thumbnailSrc={caseStudy.thumbnail}
                thumbnailAlt={`Video de ${caseStudy.company}`}
                className="w-full"
              />
            )}

            {/* Photos view - Swiper carousel with autoplay progress */}
            {activeView === "photos" && hasPhotos && (
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={caseStudy.photos.length > 1}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".swiper-custom-pagination",
                  }}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="h-full w-full"
                >
                  {caseStudy.photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={photo}
                        alt={`${caseStudy.company} - Foto ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}

                  {/* Autoplay progress indicator */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 48 48"
                      ref={progressCircle}
                      className="h-12 w-12 -rotate-90"
                      style={{
                        "--progress": 0,
                      }}
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="4"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="#278dd7"
                        strokeWidth="4"
                        strokeDasharray="125.6"
                        strokeDashoffset="calc(125.6 * (1 - var(--progress)))"
                        className="transition-[stroke-dashoffset] duration-100"
                      />
                    </svg>
                    <span
                      ref={progressContent}
                      className="absolute text-xs font-medium text-white"
                    />
                  </div>
                </Swiper>

                {/* Custom pagination */}
                {caseStudy.photos.length > 1 && (
                  <div className="swiper-custom-pagination absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 [&_.swiper-pagination-bullet-active]:bg-[#278dd7] [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet]:transition-all" />
                )}
              </div>
            )}

            {/* Fallback: show thumbnail if no video and no photos */}
            {!hasVideo && !hasPhotos && caseStudy.thumbnail && (
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src={caseStudy.thumbnail}
                  alt={caseStudy.company}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
