import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";

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