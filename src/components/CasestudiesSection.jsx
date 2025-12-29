import { Casestudy5 } from "@/components/ui/casestudy-5";
import { CasestudiesHeader } from "@/components/CasestudiesHeader";
import { getAllCaseStudies } from "@/lib/case-studies";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function CasestudiesSection() {
  const allCaseStudies = getAllCaseStudies();

  // Map MDX frontmatter to component format
  const mappedStudies = allCaseStudies.slice(0, 3).map((study) => ({
    logo: study.logo,
    company: study.company,
    tags: Array.isArray(study.tags) ? study.tags.join(" / ") : study.tags,
    title: study.title,
    subtitle: study.subtitle,
    image: study.thumbnail || "",
    link: `/casos-de-estudio/${study.slug}`,
  }));

  // First case study as featured, rest as secondary
  const featuredCasestudy = mappedStudies[0];
  const casestudies = mappedStudies.slice(1);

  return (
    <section id="casos-de-estudio" className="py-20">
      <CasestudiesHeader />
      <Casestudy5
        featuredCasestudy={featuredCasestudy}
        casestudies={casestudies}
      />
      <div className="container mx-auto mt-8 text-center">
        <Link
          href="/casos-de-estudio"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Ver todos los casos de estudio
          <MoveRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
