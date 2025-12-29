import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts"; // adjust path if needed

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://behindthebuild.app";

  return [
    // Cover / orientation
    {
      url: `${base}/`,
      lastModified: new Date("2025-12-29"),
    },

    // About / philosophy
    {
      url: `${base}/about`,
      lastModified: new Date("2025-12-29"),
    },

    // Log index
    {
      url: `${base}/log`,
      lastModified: new Date("2025-12-29"),
    },

    // Individual decision entries
    ...POSTS.map((post) => ({
      url: `${base}/log/${post.slug}`,
      lastModified: new Date(post.dateISO),
    })),
  ];
}