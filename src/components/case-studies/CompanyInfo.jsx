"use client";

export function CompanyInfo({ caseStudy }) {
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {caseStudy.results?.map((result, index) => (
            <div
              key={index}
              className="text-center md:text-left"
            >
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                {result.metric}
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                {result.label}
              </p>
            </div>
          ))}

          <div className="text-center md:text-left">
            <div className="mb-2 text-lg font-semibold text-foreground">
              Industria
            </div>
            <p className="text-muted-foreground">
              {caseStudy.industry}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
