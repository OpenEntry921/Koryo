import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: new URL(
      "/sitemap.xml",
      process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    ).toString(),
  };
}
