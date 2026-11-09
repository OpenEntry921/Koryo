import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";
import { businesses } from "@/data/solutions";
import { CTA, Notice, PageIntro, SectionTitle, Arrow } from "@/components/ui";
export const metadata: Metadata = { title: "회사소개" };
export default function Company() {
  return (
    <>
      <PageIntro
        en="COMPANY"
        title="기술과 현장을 연결합니다"
        description="고려다이나믹스의 사업과 기업정보를 소개합니다."
      />
      <div className="container section">
        <nav className="anchor-nav" aria-label="회사소개 섹션">
          <a href="#overview">회사개요</a>
          <a href="#areas">사업영역</a>
          <a href="#history">연혁</a>
          <a href="#technology">기술역량</a>
          <a href="#location">위치 안내</a>
        </nav>
        <section id="overview" className="subsection">
          <SectionTitle eyebrow="OVERVIEW" title="회사개요" />
          <Notice>{company.status} / 영문명은 임시 표기입니다.</Notice>
          <dl className="info-table">
            {[
              ["회사명", company.name],
              ["영문명", company.englishName + " (확정 필요)"],
              ["대표자", company.representative],
              ["설립일", company.established],
              ["업종", company.industry],
              ["주소", company.address],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section id="areas" className="subsection">
          <SectionTitle eyebrow="BUSINESS AREAS" title="사업영역" />
          <div className="grid four">
            {businesses.map((b) => (
              <Link
                className="simple-card"
                href={`/solutions/${b.slug}/`}
                key={b.slug}
              >
                <small className="eyebrow">{b.en}</small>
                <h3>
                  {b.name} <Arrow />
                </h3>
                <p>{b.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <section id="history" className="subsection">
          <SectionTitle eyebrow="HISTORY" title="회사 연혁" />
          <div className="empty-panel">
            <h3>확인된 연혁을 준비하고 있습니다.</h3>
            <p>
              설립일은 위 회사개요에서 안내합니다. 창업 이력 및 주요 연혁은 증빙
              확인 후 공개됩니다.
            </p>
          </div>
        </section>
        <section id="technology" className="subsection">
          <SectionTitle
            eyebrow="TECHNOLOGY"
            title="기술 검토 분야"
            description="실제 보유 기술과 인증은 증빙 확인 후 게시합니다."
          />
          <div className="grid three">
            {[
              "현장 장비 구성",
              "영상·안내 시스템 연계",
              "운영 소프트웨어 구조",
            ].map((t, i) => (
              <div className="simple-card" key={t}>
                <p className="eyebrow">0{i + 1}</p>
                <h3>{t}</h3>
                <p className="muted">
                  적용환경과 운영 목적에 따른 검토 항목입니다. 구체적 수행
                  범위는 확인이 필요합니다.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="location" className="subsection">
          <SectionTitle eyebrow="LOCATION" title="오시는 길" />
          <p className="lead">{company.address}</p>
          <a
            href={company.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            네이버 지도에서 보기 <Arrow />
          </a>
          <p className="muted">주소는 방문 전 확인해 주세요.</p>
        </section>
      </div>
      <CTA />
    </>
  );
}
