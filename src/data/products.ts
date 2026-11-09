export const categories = [
  "차량차단기",
  "차량번호인식기",
  "출입통제·발권장비",
  "주차관리 소프트웨어",
  "CCTV/LED",
  "주변기기",
] as const;
export type Product = {
  id: string;
  slug: string;
  category: (typeof categories)[number];
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: { src: string; alt: string }[];
  applicationEnvironments?: string[];
  status: "pending" | "verified";
};
export const products: Product[] = categories.map((category, index) => ({
  id: `product-${index + 1}`,
  slug: ["barrier", "lpr", "access", "software", "cctv-led", "accessories"][
    index
  ],
  category,
  name: "제품명 확인 예정",
  subtitle: category,
  description: `${category} 분류의 제품 등록을 준비하고 있습니다. 실제 제품과 공급 범위는 자료 확인 후 게시됩니다.`,
  features: ["제품 특징 확인 예정"],
  applicationEnvironments: ["적용환경 확인 예정"],
  specifications: [
    { label: "모델명", value: "확인 예정" },
    { label: "주요 사양", value: "사양 확인 예정" },
    { label: "설치 조건", value: "확인 예정" },
  ],
  images: [],
  status: "pending",
}));
