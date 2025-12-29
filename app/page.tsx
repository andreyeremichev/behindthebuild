import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";

export default function CoverPage() {
  return (
    <>
      <p>
        <strong>Behind the Build is a public decision log written inside uncertainty.</strong>
      </p>

      <p>
        It documents how build and promotion decisions are made when outcomes are unknown,
        feedback is weak, and action continues anyway.
      </p>

      <p>
        Decisions are written in the moment they are made.
        They are not rewritten to fit results.
        When signals change, new decisions are logged.
      </p>

      <hr />

      <p>
        <em>
          Start with a recent entry. Read it as orientation, not advice.
        </em>
      </p>

      <section style={{ marginTop: "28px" }}>
        <h2>Recent entries</h2>

        {POSTS.map((p) => (
          <div key={p.slug} style={{ marginBottom: "12px" }}>
            <Link href={`/log/${p.slug}`}>{p.title}</Link>
            <div className="meta">
              {formatDate(p.dateISO)} · {p.model}
            </div>
          </div>
        ))}
      </section>

      <p className="meta" style={{ marginTop: "32px" }}>
        Entries appear only when a real decision needs to be made.
      </p>
    </>
  );
}