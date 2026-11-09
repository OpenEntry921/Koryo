import Link from "next/link";
import type { ReactNode } from "react";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`button ${light ? "light" : ""}`} href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  description,
  href,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="muted">{description}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          전체 보기 <Arrow />
        </Link>
      )}
    </div>
  );
}
export function PageIntro({
  en,
  title,
  description,
}: {
  en: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">KORYO DYNAMICS / {en}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function Notice({ children }: { children: ReactNode }) {
  return (
    <p className="notice">
      <span aria-hidden="true">ⓘ</span> {children}
    </p>
  );
}
export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flow">
      {steps.map((step, i) => (
        <li key={step}>
          <span className="flow-icon" aria-hidden="true">
            {["⌁", "▣", "▤", "↗"][i % 4]}
          </span>
          <small>STEP 0{i + 1}</small>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  );
}
export function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            현장에 맞는 구성,
            <br />
            함께 검토하겠습니다.
          </h2>
          <p>설치 환경과 운영 목적에 맞는 상담을 준비하고 있습니다.</p>
        </div>
        <Button href="/contact/" light>
          문의 안내
        </Button>
      </div>
    </section>
  );
}
