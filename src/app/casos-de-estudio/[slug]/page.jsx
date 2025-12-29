import { notFound } from "next/navigation";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";
import { CompanyInfo } from "@/components/case-studies/CompanyInfo";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const caseStudy = getCaseStudyBySlug(slug);
    return {
      title: `${caseStudy.title} | Mindo`,
      description: caseStudy.subtitle,
    };
  } catch {
    return {
      title: "Caso de Estudio | Mindo",
    };
  }
}

const components = {
  h2: (props) => (
    <h2
      className="mb-4 mt-12 text-2xl font-bold tracking-tight md:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-3 mt-8 text-xl font-semibold tracking-tight md:text-2xl"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props) => <ul className="mb-4 list-disc pl-6 space-y-2" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal pl-6 space-y-2" {...props} />,
  li: (props) => <li className="text-muted-foreground" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-4 border-primary pl-6 italic text-muted-foreground"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  table: (props) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="border-b border-border" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className="border-b border-border" {...props} />,
  th: (props) => (
    <th
      className="px-4 py-3 text-left font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props) => (
    <td className="px-4 py-3 text-muted-foreground" {...props} />
  ),
};

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
};

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  let caseStudy;
  try {
    caseStudy = getCaseStudyBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <CaseStudyHero caseStudy={caseStudy} />
      <CompanyInfo caseStudy={caseStudy} />

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
            <MDXRemote source={caseStudy.content} components={components} options={mdxOptions} />
          </div>
        </div>
      </article>
    </main>
  );
}
