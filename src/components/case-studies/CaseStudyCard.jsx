"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";

export function CaseStudyCard({ caseStudy }) {
  return (
    <Link
      href={`/casos-de-estudio/${caseStudy.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <img
            src={caseStudy.logo}
            alt={caseStudy.company}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-white">
            {caseStudy.company}
          </span>
          {caseStudy.partnership && (
            <>
              <span className="text-sm text-white/60">×</span>
              <img
                src={caseStudy.partnership.logo}
                alt={caseStudy.partnership.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-white">
                {caseStudy.partnership.name}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {caseStudy.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-lg font-semibold leading-tight text-foreground">
          {caseStudy.title}
        </h3>

        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {caseStudy.subtitle}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          Leer caso de estudio
          <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
