import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

const CONTENT: Record<string, { body: React.ReactNode }> = {
  "why-this-log-exists": {
    body: (
      <>
        <div className="kicker">Context</div>

        <h1>Why this log exists: decisions made inside the void</h1>

        <p className="meta">{formatDate("2025-12-29")}</p>

        <hr />

        <p>
          <strong>This log exists because action outran certainty.</strong>
        </p>

        <p>
          Pianotrainer started as one site with a consistent visual shell and a
          clear information architecture:
        </p>

        <ul>
          <li>
            <span className="liLabel">/trainers</span> — skill tools
          </li>
          <li>
            <span className="liLabel">/toys</span> — playful discovery
          </li>
          <li>
            <span className="liLabel">/learn</span> — educational depth
          </li>
        </ul>

        <p>
          One coherent product. Clean structure. Clear intent — for users and for
          bots.
        </p>

        <p>
          Then the site changed. Not in one dramatic pivot, but through a
          sequence of real building.
        </p>

        <p>
          A new toy appeared — Path of Harmony — showing chord shapes on a
          chromatic circle. That led to cinematic two-chord movement. That led
          to Two Paths of Harmony: Flow and Color. That led to emotional
          progressions and guided practice.
        </p>

        <p>
          None of these steps were wrong. They were productive. They were
          exciting.
        </p>

        <p>
          <strong>The system grew faster than the signals.</strong>
        </p>

        <p>
          More pages. More concepts. More possible audiences. Still very little
          feedback about what actually mattered.
        </p>
        <p>
  At that point, the biggest risk was no longer a bad feature. It was
  getting lost.
</p>

<p>
  The decision that followed was to split PianoTrainer into three separate
  products: Pianotrainer, EmotionalChords, and MusicalToys. At the time,
  this split was driven by iteration and momentum, not by explicit thinking
  models or formal reasoning.
</p>

        <p>
          Behind the Build exists for moments like this.
        </p>

        <ul>
          <li>
            <span className="liLabel">real things are being built</span>
          </li>
          <li>
            <span className="liLabel">decisions are irreversible</span>
          </li>
          <li>
            <span className="liLabel">outcomes are unknown</span>
          </li>
          <li>
            <span className="liLabel">the void stays quiet</span>
          </li>
        </ul>

        <p>
  From this point forward, decisions are logged when they are made and
  left intact. If the world changes, the decision is not rewritten — it
  is revisited through a new entry.
</p>

<p>
  When reasoning needs structure, a small set of mental models is used.
  These models were chosen not to be clever, but to avoid getting lost:
  they help surface blind spots, limit damage, and keep decisions grounded
  when signals are weak. Not every decision needs every model — only what
  meaningfully reduces confusion.
</p>

        <p>This is how motion stops being confused with direction.</p>

        <hr />

       <p className="meta">
  Log closure: this entry sets the context. The first model-based decision
  follows.
</p>
      </>
    ),
  },

  "no-comments-on-site": {
    body: (
      <>
        <div className="kicker">Decision log</div>

        <h1>Should this log allow on-site comments and questions?</h1>

        <p className="meta">
          Mental model used: <strong>Inversion</strong> ·{" "}
          <strong>{formatDate("2025-12-29")}</strong>
        </p>

        <hr />

        <h2>Inversion question</h2>
        <p>
          If I wanted to destroy the value of this log, what would I do regarding
          comments?
        </p>

        <h2>Failure modes introduced by on-site comments</h2>
        <ul>
          <li>
            <span className="liLabel">
              Turning thinking into performance:
            </span>{" "}
            writing starts anticipating replies.
          </li>
          <li>
            <span className="liLabel">
              Polluting a weak-signal environment:
            </span>{" "}
            sparse early comments distort decision-making.
          </li>
          <li>
            <span className="liLabel">Premature social gravity:</span> silence
            in comments becomes another “void” metric.
          </li>
          <li>
            <span className="liLabel">Cognitive load leakage:</span> moderation
            and responsiveness become obligations.
          </li>
        </ul>

        <h2>Decision</h2>
        <p>No on-site comments.</p>

        <hr />

        <p className="meta">
          Emotional note (bounded): closing comments feels restrictive, but it
          protects a rare space where thinking is allowed to finish before being
          answered.
        </p>
      </>
    ),
  },
  "what-to-do-with-an-existing-social-account": {
  body: (
    <>
      <div className="kicker">Decision log</div>

      <h1>What should happen to an existing social account after a product split?</h1>

      <p className="meta">
        Mental model used: <strong>Inversion</strong> ·{" "}
        <strong>{formatDate("2025-12-29")}</strong>
      </p>

      <hr />

      <p>
        A common situation: one product evolves into several.
      </p>

      <p>
        What started as a single, coherent thing is now clearly split into
        distinct products with different intents, audiences, and rhythms.
        New social accounts are created for the new products.
      </p>

      <p>
        The unresolved question is what to do with the original social account —
        the one that already has history, posts, and time invested in it.
      </p>

      <p>
        This entry uses PianoTrainer as a concrete example, but the decision
        applies broadly to any product that has outgrown its original shape.
      </p>

      <h2>Options on the table</h2>

      <ul>
        <li>
          <span className="liLabel">Option A:</span> turn the original account
          into a publisher and promote all new products under it.
        </li>
        <li>
          <span className="liLabel">Option B:</span> give each product its own
          account; keep the original account quiet or very low-frequency.
        </li>
        <li>
          <span className="liLabel">Option C:</span> create separate accounts,
          but still actively use the original one because it already has history
          and accumulated effort.
        </li>
      </ul>

      <h2>Inversion question</h2>

      <p>
        If I wanted to guarantee confusion, weak signal, or long-term drag,
        what would I do with the original account?
      </p>

      <h2>Failure modes</h2>

      <ul>
        <li>
          <span className="liLabel">Mixed intent feed:</span> using one account
          to speak to multiple audiences with different expectations almost
          always leads to diluted engagement and unclear signals.
        </li>

        <li>
          <span className="liLabel">History mistaken for signal:</span> past
          activity feels like momentum, but history alone does not justify
          continued use if the underlying promise has changed.
        </li>

        <li>
          <span className="liLabel">No editorial spine:</span> a publisher role
          without a single, obvious promise tends to drift into reposts,
          filler, or obligation-driven posting.
        </li>

        <li>
          <span className="liLabel">Maintenance gravity:</span> every active
          account adds cognitive and operational load, even if it looks small
          on paper.
        </li>
      </ul>

      <h2>Negative constraints</h2>

      <p>
        Inversion surfaces a few hard boundaries:
      </p>

      <ul>
        <li>
          <span className="liLabel">Must not</span> mix audiences with different
          intents in one feed.
        </li>
        <li>
          <span className="liLabel">Must not</span> justify activity purely by
          sunk cost.
        </li>
        <li>
          <span className="liLabel">Must not</span> create a publisher role
          without a clear editorial promise.
        </li>
      </ul>

      <h2>Decision</h2>

      <p>
        The lowest-risk option is to let each product speak for itself.
      </p>

      <p>
        New products use their own focused social accounts. The original account
        is kept quiet or used only occasionally, without cadence pressure and
        without being forced into a publisher role.
      </p>

      <h2>Conditions to reopen</h2>

      <p>
        This decision should be revisited only if the original account develops
        a clear, independent narrative that does not overlap with the new
        products.
      </p>

      <hr />

      <p className="meta">
        Log closure: clarity beats reuse when a product has split.
      </p>
    </>
  ),
},
};


export default async function LogEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = POSTS.findIndex((p) => p.slug === slug);
if (idx === -1 || !CONTENT[slug]) return notFound();

const prevPost = idx > 0 ? POSTS[idx - 1] : null; // newer
const nextPost = idx < POSTS.length - 1 ? POSTS[idx + 1] : null; // older
  return (
    <>


      <div className="paper">{CONTENT[slug].body}</div>

<div style={{ marginTop: "22px", display: "flex", justifyContent: "space-between" }}>
  <div className="meta">
    {prevPost ? (
      <Link href={`/log/${prevPost.slug}`}>← Previous</Link>
    ) : (
      <span />
    )}
  </div>

  <div className="meta">
    {nextPost ? <Link href={`/log/${nextPost.slug}`}>Next →</Link> : <span />}
  </div>
</div>

<div className="footer">Decision logged. No action until conditions change.</div>
    </>
  );
}