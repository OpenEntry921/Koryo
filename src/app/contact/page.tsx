import type { Metadata } from "next";
import { company } from "@/data/company";
import { PageIntro, Notice, Arrow, SectionTitle } from "@/components/ui";
export const metadata: Metadata = { title: "문의안내" };
export default function Contact() {
  return (
    <>
      <PageIntro
        en="CONTACT"
        title="문의 안내"
        description="현장에 필요한 구성을 함께 검토하기 위한 안내입니다."
      />
      <div className="container section">
        <div className="split">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              편리한 운영을 위한
              <br />첫 연결.
            </h2>
            <p className="muted">
              설치 장소, 운영 방식과 검토 중인 제품 분류를
              <br />
              미리 정리해 두시면 상담에 도움이 됩니다.
            </p>
            <Notice>
              대표 연락처 및 실제 수신 방식 확인 중입니다.
              <br />
              현재 온라인 문의 접수는 운영하지 않습니다.
            </Notice>
          </div>
          <div>
            <dl className="contact-list">
              <div>
                <dt>ADDRESS</dt>
                <dd>{company.address}</dd>
              </div>
              <div>
                <dt>PHONE</dt>
                <dd>
                  {company.phone ? (
                    <a href={`tel:${company.phone}`}>{company.phone}</a>
                  ) : (
                    "대표 전화 확인 예정"
                  )}
                </dd>
              </div>
              <div>
                <dt>EMAIL</dt>
                <dd>
                  {company.email ? (
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  ) : (
                    "이메일 확인 예정"
                  )}
                </dd>
              </div>
            </dl>
            <a
              className="button"
              href={company.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              네이버 지도에서 위치 보기 <Arrow />
            </a>
            <p className="muted">방문 전 주소 및 연락처 확인이 필요합니다.</p>
          </div>
        </div>
        <section className="subsection">
          <SectionTitle
            eyebrow="CONSULTATION GUIDE"
            title="상담 전 준비하면 좋은 정보"
          />
          <div className="grid three">
            {[
              ["01", "설치 환경", "현장 위치, 진입·출차 동선, 실내·외 환경"],
              ["02", "운영 목적", "정기·방문차량 구분, 운영시간 및 관리 방식"],
              ["03", "연계 장비", "기존 장비 모델, 통신 방식 및 관리 프로그램"],
            ].map(([n, t, d]) => (
              <div className="simple-card" key={n}>
                <p className="eyebrow">{n}</p>
                <h3>{t}</h3>
                <p className="muted">{d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
