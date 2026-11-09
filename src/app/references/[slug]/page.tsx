import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Media } from "@/components/Media";
import { PageIntro, Notice, Button } from "@/components/ui";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: projects.find((p) => p.slug === slug)?.name || "설치사례" };
}
export default async function Reference({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageIntro
        en="PROJECT DETAIL"
        title={p.name}
        description={p.description}
      />
      <div className="container section narrow">
        {p.status === "pending" && (
          <Notice>사례 등록용 템플릿이며 실제 설치실적이 아닙니다.</Notice>
        )}
        <Media
          src={p.images[0]?.src}
          alt={p.images[0]?.alt || "승인된 현장 사진 등록 예정"}
          kind="project"
        />
        <dl className="info-table">
          <div>
            <dt>현장명</dt>
            <dd>{p.name}</dd>
          </div>
          <div>
            <dt>위치</dt>
            <dd>{p.location}</dd>
          </div>
          <div>
            <dt>적용 솔루션</dt>
            <dd>
              {p.solutions.length ? p.solutions.join(", ") : "확인 후 등록"}
            </dd>
          </div>
        </dl>
        <p className="lead">{p.description}</p>
        <div className="gallery">
          {p.images.slice(1).map((im) => (
            <Media key={im.src} src={im.src} alt={im.alt} />
          ))}
        </div>
        <Button href="/contact/">관련 문의 안내</Button>
        <p>
          <Link className="text-link" href="/references/">
            ← 설치사례 목록
          </Link>
        </p>
      </div>
    </>
  );
}
