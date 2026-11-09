import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { Media } from "@/components/Media";
import { ProductCard } from "@/components/cards";
import { Button, Notice, PageIntro, SectionTitle } from "@/components/ui";
export const dynamicParams = false;
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  return { title: p ? `${p.category} · ${p.name}` : "제품" };
}
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageIntro
        en="PRODUCT DETAIL"
        title={p.category}
        description="제품 정보 및 상세 사양 안내"
      />
      <div className="container section">
        {p.status === "pending" && (
          <Notice>
            미확인 임시 제품 데이터입니다. 실제 판매·공급 제품을 의미하지
            않습니다.
          </Notice>
        )}
        <div className="split product-detail">
          <div>
            <Media
              src={p.images[0]?.src}
              alt={p.images[0]?.alt || `${p.category} 대표 이미지 등록 예정`}
            />
            <div className="gallery" aria-label="제품 이미지 갤러리">
              {p.images.length > 1 ? (
                p.images
                  .slice(1)
                  .map((im) => <Media key={im.src} src={im.src} alt={im.alt} />)
              ) : (
                <p className="muted">추가 이미지 등록 예정</p>
              )}
            </div>
          </div>
          <div>
            <span className="tag">
              {p.status === "pending" ? "자료 확인 중" : p.category}
            </span>
            <h2>{p.name}</h2>
            <p className="lead">{p.subtitle}</p>
            <p className="muted">{p.description}</p>
            <Button href="/contact/">제품 문의 안내</Button>
          </div>
        </div>
        <section className="subsection">
          <SectionTitle eyebrow="FEATURES" title="제품 특징" />
          <ul className="feature-list">
            {p.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
        <section className="subsection">
          <SectionTitle eyebrow="APPLICATION" title="적용환경" />
          <ul className="feature-list">
            {(p.applicationEnvironments || ["적용환경 확인 예정"]).map(
              (environment) => (
                <li key={environment}>{environment}</li>
              ),
            )}
          </ul>
        </section>
        <section className="subsection">
          <SectionTitle eyebrow="SPECIFICATIONS" title="제품 사양" />
          <table className="spec-table">
            <caption>{p.category} 사양 안내</caption>
            <thead>
              <tr>
                <th scope="col">항목</th>
                <th scope="col">내용</th>
              </tr>
            </thead>
            <tbody>
              {p.specifications.map((s) => (
                <tr key={s.label}>
                  <th scope="row">{s.label}</th>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="subsection">
          <SectionTitle
            eyebrow="RELATED CATEGORIES"
            title="함께 살펴볼 제품 분류"
          />
          <div className="grid three">
            {products
              .filter((x) => x.id !== p.id)
              .slice(0, 3)
              .map((x) => (
                <ProductCard product={x} key={x.id} />
              ))}
          </div>
        </section>
        <Link className="text-link" href="/products/">
          ← 제품 목록
        </Link>
      </div>
    </>
  );
}
