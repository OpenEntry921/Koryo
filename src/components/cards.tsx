import Link from "next/link";
import type { Product } from "@/data/products";
import type { Project } from "@/data/projects";
import { Media } from "./Media";
import { Arrow } from "./ui";
export function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link className="product-card" href={`/products/${p.slug}/`}>
      <Media
        src={p.images[0]?.src}
        alt={p.images[0]?.alt || `${p.category} 이미지 등록 예정`}
      />
      <div className="card-body">
        <span className="tag">
          {p.status === "pending" ? "자료 확인 중" : p.category}
        </span>
        <p className="muted">{p.category}</p>
        <h3>
          {p.name}
          <Arrow />
        </h3>
      </div>
    </Link>
  );
}
export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link className="project-card" href={`/references/${p.slug}/`}>
      <Media
        src={p.images[0]?.src}
        alt={p.images[0]?.alt || "설치사례 사진 등록 예정"}
        kind="project"
      />
      <div className="card-body">
        <p className="eyebrow">
          {p.status === "pending" ? "COMING SOON" : p.location}
        </p>
        <h3>
          {p.name}
          <Arrow />
        </h3>
        <p className="muted">{p.description}</p>
      </div>
    </Link>
  );
}
