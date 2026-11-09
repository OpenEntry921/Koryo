import { notFound } from "next/navigation";
import Link from "next/link";
import { solutions, solutionNotice } from "@/data/solutions";
import {
  PageIntro,
  Notice,
  Flow,
  CTA,
  SectionTitle,
  Arrow,
} from "@/components/ui";
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: solutions.find((s) => s.slug === slug)?.name || "솔루션" };
}
export default async function SolutionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = solutions.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageIntro en={s.en} title={s.name} description={s.description} />
      <div className="container section">
        <Notice>{solutionNotice}</Notice>
        <SectionTitle eyebrow="SYSTEM FLOW" title="시스템 구성 흐름" />
        <Flow steps={s.steps} />
        <section className="subsection">
          <SectionTitle eyebrow="CONFIGURATION" title="주요 검토 항목" />
          <div className="grid three">
            {s.features.map((f, i) => (
              <div className="simple-card" key={f}>
                <p className="eyebrow">0{i + 1}</p>
                <h3>{f}</h3>
                <p className="muted">
                  세부 기능 및 적용 조건은 실제 공급 자료 확인 후 확정됩니다.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="subsection">
          <SectionTitle
            eyebrow="CONNECTED SOLUTIONS"
            title="함께 살펴볼 구성"
          />
          <div className="grid two">
            {solutions
              .filter((x) => x.slug !== slug)
              .slice(0, 2)
              .map((x) => (
                <Link
                  href={`/solutions/${x.slug}/`}
                  className="simple-card"
                  key={x.slug}
                >
                  <h3>
                    {x.name} <Arrow />
                  </h3>
                  <p>{x.description}</p>
                </Link>
              ))}
          </div>
        </section>
        <Link className="text-link" href="/solutions/">
          ← 전체 솔루션
        </Link>
      </div>
      <CTA />
    </>
  );
}
