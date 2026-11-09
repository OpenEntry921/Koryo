import type { Metadata } from "next";
import Link from "next/link";
import { solutions, solutionNotice } from "@/data/solutions";
import {
  PageIntro,
  Notice,
  Arrow,
  Flow,
  SectionTitle,
  CTA,
} from "@/components/ui";
export const metadata: Metadata = { title: "솔루션" };
export default function Solutions() {
  return (
    <>
      <PageIntro
        en="SOLUTIONS"
        title="운영을 연결하는 시스템 구조"
        description="주차, 영상, 안내와 관리 시스템의 연결 방식을 살펴보세요."
      />
      <div className="container section">
        <Notice>{solutionNotice}</Notice>
        <div className="grid two">
          {solutions.map((s, i) => (
            <Link
              className="solution-card"
              key={s.slug}
              href={`/solutions/${s.slug}/`}
            >
              <div className="solution-number">
                0{i + 1}
                <Arrow />
              </div>
              <p className="eyebrow">{s.en}</p>
              <h2>{s.name}</h2>
              <p>{s.description}</p>
              <span className="text-link">
                구성 예시 보기 <Arrow />
              </span>
            </Link>
          ))}
        </div>
        <section className="subsection">
          <SectionTitle
            eyebrow="IMPLEMENTATION PROCESS"
            title="설치 및 운영 검토 절차"
            description="일정·지원 범위·서비스 조건은 상담 시 개별 확인이 필요합니다."
          />
          <Flow
            steps={[
              "현장 환경 확인",
              "구성 및 일정 검토",
              "설치·연동 점검",
              "운영·지원 범위 확인",
            ]}
          />
        </section>
        <section className="subsection">
          <SectionTitle
            eyebrow="SUPPORT & FAQ"
            title="기술지원 및 자주 묻는 질문"
          />
          <div className="faq">
            {[
              [
                "기존 장비와 연동할 수 있나요?",
                "장비 모델, 통신 방식, 운영 환경을 확인한 뒤 연동 가능 여부를 검토해야 합니다.",
              ],
              [
                "설치에는 얼마나 걸리나요?",
                "현장 조사, 배선·토목 조건과 장비 구성이 확정된 뒤 일정을 협의합니다. 제안서의 타사 일정을 당사 일정으로 안내하지 않습니다.",
              ],
              [
                "사후관리와 원격지원이 제공되나요?",
                "지원 방식, 운영시간, 유지관리 범위와 계약 조건은 확인 후 안내됩니다.",
              ],
              [
                "모바일 앱은 어디서 설치하나요?",
                "현재 당사 앱이나 다운로드 링크는 확인되지 않았습니다. 모바일 연계는 구조 예시로만 소개합니다.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">＋</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <CTA />
    </>
  );
}
