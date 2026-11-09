import Link from "next/link";
import { businesses, solutionNotice } from "@/data/solutions";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import {
  Arrow,
  Button,
  CTA,
  Flow,
  Notice,
  SectionTitle,
} from "@/components/ui";
import { ProductCard, ProjectCard } from "@/components/cards";
import ParkingScene from "@/components/ParkingScene";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">CONNECTING TECHNOLOGY & SPACE</p>
            <h1>
              SMART PARKING
              <br />& CONTROL
              <br />
              <span>SOLUTIONS</span>
            </h1>
            <p className="hero-sub">
              효율적인 주차 운영을 위한
              <br />
              통합 관제 솔루션
            </p>
            <Button href="/solutions/" light>
              솔루션 살펴보기
            </Button>
            <a className="hero-scroll" href="#business">
              SCROLL TO EXPLORE ↓
            </a>
          </div>
          <ParkingScene />
        </div>
        <div className="hero-bottom">
          <div className="container">
            <span>PARKING CONTROL</span>
            <span>CCTV & VIDEO</span>
            <span>LED & GUIDANCE</span>
            <span>SOFTWARE</span>
          </div>
        </div>
      </section>
      <section className="section" id="business">
        <div className="container">
          <SectionTitle
            eyebrow="OUR BUSINESS"
            title="기술과 공간을 연결하는 네 가지 사업"
            description="주차부터 영상, 안내, 소프트웨어까지. 현장 운영에 필요한 연결을 생각합니다."
          />
          <div className="grid four business-grid">
            {businesses.map((b) => (
              <Link
                href={`/solutions/${b.slug}/`}
                className="business-card"
                key={b.slug}
              >
                <span className="business-number">{b.number}</span>
                <div className="line-symbol" aria-hidden="true">
                  {["⌁", "◉", "▥", "⌘"][Number(b.number) - 1]}
                </div>
                <small>{b.en}</small>
                <h3>
                  {b.name}
                  <Arrow />
                </h3>
                <p>{b.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section about-band">
        <div className="container split">
          <div>
            <p className="eyebrow">ABOUT KORYO DYNAMICS</p>
            <h2>
              현장을 이해하는 기술,
              <br />더 나은 운영을 향한 연결.
            </h2>
          </div>
          <div>
            <p className="lead">
              고려다이나믹스는 주차관제, CCTV, LED,
              <br className="desktop-break" /> 소프트웨어 개발 및 공급을
              사업분야로 합니다.
            </p>
            <p className="muted">
              각 사업분야의 정보와 솔루션 구성 방향을 소개합니다.
              <br />
              구체적인 제품 및 공급 범위는 확인 후 안내됩니다.
            </p>
            <Link className="text-link" href="/company/">
              회사 소개 <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="SYSTEM OVERVIEW"
            title="입차부터 운영 관리까지, 하나의 흐름으로"
            href="/solutions/parking/"
          />
          <div className="system-panel">
            <div className="system-label">
              <span className="tag">SYSTEM CONCEPT</span>
              <h3>스마트 주차관제 구성</h3>
              <p className="muted">
                현장 장비와 관리 시스템을 연결하는 기본 구조
              </p>
            </div>
            <Flow
              steps={[
                "차량번호 인식",
                "출입 권한 확인",
                "차량차단기 제어",
                "통합 운영 관리",
              ]}
            />
            <Notice>{solutionNotice}</Notice>
          </div>
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <SectionTitle
            eyebrow="PRODUCT LINEUP"
            title="현장 구성에 필요한 제품 분류"
            description="제품 이미지와 모델, 상세 사양은 확인 후 순차 등록됩니다."
            href="/products/"
          />
          <div className="grid three">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="PROJECT REFERENCES"
            title="현장으로 이어지는 솔루션"
            description="공개 승인을 받은 실제 설치사례를 준비하고 있습니다."
            href="/references/"
          />
          <div className="reference-preview">
            <ProjectCard project={projects[0]} />
            <div className="reference-note">
              <span className="big-outline" aria-hidden="true">
                ↗
              </span>
              <h3>신뢰할 수 있는 현장 이야기</h3>
              <p className="muted">
                검증된 현장 정보와 사진으로
                <br />
                적용 솔루션을 안내하겠습니다.
              </p>
              <Button href="/references/upcoming/">설치사례 등록 안내</Button>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
