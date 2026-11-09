"use client";
import { useState } from "react";
import { categories, products } from "@/data/products";
import { ProductCard } from "./cards";
export default function ProductCatalog() {
  const [category, setCategory] = useState("전체");
  const items = products.filter(
    (p) => category === "전체" || p.category === category,
  );
  return (
    <>
      <div className="filters" role="group" aria-label="제품 카테고리">
        {["전체", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        {category} · {items.length}개 분류 항목
      </p>
      <div className="grid three">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
