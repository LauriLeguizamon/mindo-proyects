import { getAllCaseStudies } from "@/lib/case-studies";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";

export const metadata = {
  title: "Casos de Estudio | Mindo",
  description: "Descubre cómo hemos ayudado a empresas a transformar sus operaciones con soluciones de IA.",
};

export default function CasosDeEstudioPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="min-h-screen py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Casos de Estudio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Descubre cómo hemos ayudado a empresas a transformar sus operaciones con soluciones de inteligencia artificial.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </main>
  );
}
