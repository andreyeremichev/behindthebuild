import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Behind the Build",
  description:
    "Behind the Build is a public decision log documenting real product and promotion choices as they are made, before outcomes are known. Entries are recorded at the time of decision, without hindsight, and are intended for orientation rather than advice.",
};

export default function AboutPage() {
  return (
    <>
      <h1>About this log</h1>

      <p>
        <strong>Behind the Build is a public decision log written from inside uncertainty.</strong>
      </p>

      <p>
        It exists for moments when you are building or promoting something,
        taking action, making choices — while not knowing whether any of it will work.
      </p>

      <p>
        Writing decisions down for others is intentional.
        Explaining a decision clearly is often the only way to understand it.
      </p>

      <p>
        Most entries start from a negative question:
        <em> what would guarantee getting lost here?</em>
        If that alone is enough to orient the next step, the thinking stops.
      </p>

      <p>
        Decisions are written in the moment they are made.
        They are not edited later to match outcomes.
      </p>

      <p>
        Signals — or the absence of signals — create new constraints.
        New constraints justify new decisions.
        Earlier decisions are revisited through new entries, not rewritten.
      </p>

      <p>
        Over time, patterns may emerge.
        Not because they were planned, but because decisions accumulated.
      </p>

      <p>
        This log exists to stay oriented while shouting into the void —
        together with others who are doing the same.
      </p>

      {/* Human-facing, quiet classification (small text, near the bottom) */}
      <p style={{ fontSize: "0.9em", opacity: 0.7, marginTop: "2rem" }}>
        This is a record of decisions made while not knowing how things will turn out.
        Entries are written at the moment choices are made, without hindsight or conclusions.
        Nothing here is meant to instruct or persuade — it exists to leave a trace of thinking
        inside uncertainty.
      </p>

      
    </>
  );
}