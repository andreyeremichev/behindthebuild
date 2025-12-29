import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Behind the Build",
  description:
    "Behind the Build is a public decision log documenting real product and promotion choices as they are made, before outcomes are known. Entries are recorded at the time of decision, without hindsight, and are intended for orientation rather than advice.",
};

export default function LogIndexPage() {
  return (
    <>
      <h1>Decision Log</h1>

      <p className="meta">
        Decisions written in present tense. Not revised to fit outcomes.
      </p>

      <section style={{ marginTop: "24px" }}>
        {POSTS.map((p) => (
          <div key={p.slug} style={{ marginBottom: "14px" }}>
            <Link href={`/log/${p.slug}`}>{p.title}</Link>
            <div className="meta">
              {formatDate(p.dateISO)} · {p.model}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}