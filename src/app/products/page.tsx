import type { Metadata } from "next";
import ProductCatalog from "@/components/ProductCatalog";
import { PageIntro, Notice, CTA } from "@/components/ui";
export const metadata: Metadata = { title: "제품안내" };
export default function Products() {
  return (
    <>
      <PageIntro
        en="PRODUCTS"
        title="제품안내"
        description="설치 환경과 운영 목적에 따른 제품 분류를 확인하세요."
      />
      <div className="container section">
        <Notice>
          등록 준비용 임시 데이터입니다. 실제 제품명·이미지·사양 및 공급 여부는
          확인 후 게시됩니다.
        </Notice>
        <ProductCatalog />
      </div>
      <CTA />
    </>
  );
}
