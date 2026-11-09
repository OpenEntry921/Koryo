import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards";
import { PageIntro, Notice, CTA } from "@/components/ui";
export const metadata: Metadata = { title: "설치사례" };
export default function References() {
  return (
    <>
      <PageIntro
        en="REFERENCES"
        title="설치사례"
        description="검증된 현장 정보로 솔루션의 적용 모습을 소개합니다."
      />
      <div className="container section">
        <Notice>
          공개 승인을 받은 실제 사례가 아직 등록되지 않았습니다. 타사 실적이나
          현장 사진을 사용하지 않습니다.
        </Notice>
        <div className="grid three">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
      <CTA />
    </>
  );
}
