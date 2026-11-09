import type { MetadataRoute } from "next";
import { navigation } from "@/data/navigation";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [
    ...navigation.map((n) => n.href),
    ...products.map((p) => `/products/${p.slug}/`),
    ...solutions.map((s) => `/solutions/${s.slug}/`),
    ...projects.map((p) => `/references/${p.slug}/`),
  ].map((path) => ({ url: new URL(path, base).toString() }));
}
