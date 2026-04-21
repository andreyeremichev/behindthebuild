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
"locking-a-leverage-first-operating-rule": {
  body: (
    <>
      <div className="kicker">Decision log</div>

      <h1>Locking a leverage-first operating rule</h1>

      <p className="meta">
        Mental model used: <strong>Inversion</strong> ·{" "}
        <strong>{formatDate("2026-01-04")}</strong>
      </p>

      <hr />

      <h2>Context</h2>

      <p>
        With multiple projects live at different stages, decision-making began
        to blur. The problem was not a lack of ideas, but slow role creep:
        projects quietly trying to do more than they were meant to.
      </p>

      <p>
        Left unchecked, this creates diffusion of effort, expectation debt, and
        time spent defending decisions emotionally instead of structurally.
      </p>

      <p>
        I needed a way to reduce optionality, not increase it.
      </p>

      <h2>Inversion</h2>

      <p>
        If I wanted to guarantee long-term stagnation, I would let every project
        pursue multiple vague goals at once — learning, identity, ethics,
        expression — without any hard constraint on what actually compounds.
      </p>

      <p>
        Inversion makes the failure mode obvious: projects that do not
        accumulate real leverage slowly turn into unpaid work defended by
        narratives.
      </p>

      <h2>The rule</h2>

      <p>
        I am locking a single global operating rule:
      </p>

      <p>
        <strong>
          Each project must accumulate a form of leverage that can plausibly
          convert into freedom (money without daily labor). Anything that does
          not strengthen that leverage is rejected by default.
        </strong>
      </p>

      <p>
        Leverage is not posture, ethics, learning, or identity. Leverage is
        something that can compound and later cash out.
      </p>

      <h2>The only valid leverage types</h2>

      <p>
        After inversion, only four leverage types survive scrutiny:
      </p>

      <h3>1. Artifacts</h3>

      <ul>
        <li><span className="liLabel">Shareable</span></li>
        <li><span className="liLabel">Ownable</span></li>
        <li><span className="liLabel">Travel without you</span></li>
        <li>
          <span className="liLabel">Monetizable later</span>{" "}
          (downloads, embeds, ads, licensing)
        </li>
      </ul>

      <p>
        Examples include postcards, generated visuals, audio or video outputs,
        puzzles, and minimal interactive toys.
      </p>

      <h3>2. Traffic</h3>

      <ul>
        <li><span className="liLabel">Repeatable</span></li>
        <li>
          <span className="liLabel">Searchable or rediscoverable</span>
        </li>
        <li>
          <span className="liLabel">Monetizable via ads or redirection</span>
        </li>
      </ul>

      <p>
        One-off virality alone is not leverage. Traffic counts only when it
        accumulates or returns.
      </p>

      <h3>3. Niche gravity</h3>

      <p>
        A concentrated group of people who come for a specific reason and
        recognize the project as “for them”.
      </p>

      <p>
        This is not broad traffic, not general trust, and not authority. It is
        sharp positioning with vitality inside a narrow space.
      </p>

      <h3>4. Trust</h3>

      <ul>
        <li><span className="liLabel">Slow</span></li>
        <li><span className="liLabel">Fragile</span></li>
        <li><span className="liLabel">Transferable across projects</span></li>
        <li>
          <span className="liLabel">
            Reduces friction for future monetization
          </span>
        </li>
      </ul>

      <p>
        Trust is leverage only when explicitly protected.
      </p>

      <h2>Locked leverage assignments</h2>

      <p>
        Each project is allowed one primary leverage. Secondary effects may
        exist, but are not optimized for.
      </p>

      <ul>
        <li>
          <span className="liLabel">PianoTrainer</span> → Trust
          <span className="meta"> (secondary: evergreen traffic)</span>
        </li>
        <li>
          <span className="liLabel">MusicalToys</span> → Artifacts
          <span className="meta"> (secondary: traffic via sharing)</span>
        </li>
        <li>
          <span className="liLabel">EmotionalChords</span> → Niche gravity
          <span className="meta"> (secondary: trust inside the niche)</span>
        </li>
        <li>
          <span className="liLabel">ViralToys</span> → Artifacts
          <span className="meta"> (secondary: traffic when earned)</span>
        </li>
        <li>
          <span className="liLabel">Behind the Build</span> → Trust
          <span className="meta">
            {" "}
            (secondary: narrative coherence across projects)
          </span>
        </li>
      </ul>

      <h2>Clarification: ViralToys</h2>

      <p>
        ViralToys builds viral toys knowing most will fail, and turns the
        visible record of those attempts — including their deaths — into a
        shareable artifact itself.
      </p>

      <p>
        Individual toys are disposable inputs. The kill feed and lifecycle
        system are part of the artifact.
      </p>

      <p>
        Virality is not guaranteed. Neither toys nor the kill feed are rescued
        to force outcomes.
      </p>

      <h2>Cross-project constraints (not leverage)</h2>

      <p>
        Some principles apply across all projects but are not leverage
        themselves:
      </p>

      <ul>
        <li><span className="liLabel">restraint</span></li>
        <li><span className="liLabel">honesty</span></li>
        <li><span className="liLabel">signal purity</span></li>
        <li><span className="liLabel">refusal to fake success</span></li>
      </ul>

      <p>
        These are governance constraints. They protect leverage; they are not
        leverage.
      </p>

      <h2>Enforcement rule</h2>

      <p>
        Any action must name which leverage it strengthens, and for which
        project.
      </p>

      <p>
        If the leverage cannot be named clearly, the action is rejected.
      </p>

      <h2>Kill / decay rule</h2>

      <p>
        If a project stops accumulating its assigned leverage, it enters decay
        mode:
      </p>

      <ul>
        <li><span className="liLabel">no new features</span></li>
        <li><span className="liLabel">no expansion</span></li>
        <li><span className="liLabel">no additional attention</span></li>
      </ul>

      <p>
        Decay is not failure. It is capital preservation.
      </p>

      <h2>Final invariant</h2>

      <p>
        You are not building products. You are accumulating leverage under
        uncertainty.
      </p>

      <p>
        Projects are vehicles. Leverage is the asset.
      </p>

      <hr />

      <p className="meta">
        Log closure: leverage is now the primary decision boundary.
      </p>
    </>
  ),
},
"stress-testing-viraltoys-success-and-non-virality": {
  body: (
    <>
      <div className="kicker">Decision log</div>

      <h1>Stress testing ViralToys under success and silence</h1>

      <p className="meta">
        Mental model used: <strong>Inversion</strong> ·{" "}
        <strong>{formatDate("2026-01-04")}</strong>
      </p>

      <hr />

      <h2>Context</h2>

      <p>
        ViralToys is built around an unusual commitment: the public surface is a
        lifecycle system, not a winner showcase. Most attempts will die. That is
        expected. The kill feed is not an embarrassment — it is the artifact.
      </p>

      <p>
        The question that matters is not whether the system works on paper, but
        whether it survives reality.
      </p>

      <h2>Inversion</h2>

      <p>
        If I wanted to quietly destroy this system, I would do it in one of two
        ways:
      </p>

      <ul>
        <li>
          <span className="liLabel">Under success:</span> let winners take over
          the front door, soften kill discipline, and retcon past deaths.
        </li>
        <li>
          <span className="liLabel">Under silence:</span> start adding meaning
          to compensate for lack of signal — commentary, lessons, excuses,
          theory.
        </li>
      </ul>

      <p>
        So the real stress test is symmetric:
        <span className="liLabel"> can the system survive success, and can it survive none?</span>
      </p>

      <hr />

      <h2>Stress test A: what if three toys go viral?</h2>

      <p>
        “Three toys go viral” is rarely a clean victory. It usually means
        fragmented success: different platforms, different audiences, different
        timing.
      </p>

      <p>Where systems usually break:</p>

      <ul>
        <li>
          <span className="liLabel">Winner capture:</span> the project becomes
          “Toy A (and some other stuff)”.
        </li>
        <li>
          <span className="liLabel">Retconning:</span> kills start to feel
          uncomfortable and get revisited emotionally.
        </li>
        <li>
          <span className="liLabel">Status inflation:</span> new vague labels
          appear (“promising”, “strong”, “almost”).
        </li>
        <li>
          <span className="liLabel">Optimization pressure:</span> the system
          becomes a growth machine; the original thesis dissolves.
        </li>
      </ul>

      <p>
        Under the locked ViralToys model, success is not allowed to take over the
        front door. The homepage remains the failure surface. Viral toys can
        exist, but they do not become the default narrative.
      </p>

      <p>
        This neutralizes winner capture. The kill feed stays what it is: a
        reality surface where attempts live or die — not a myth about “failures
        that led to success”.
      </p>

      <p>
        The single pressure point that remains is narrative temptation: when
        multiple things succeed, a story emerges — “they figured something out.”
        The danger is not what happens, but what you are expected to claim.
      </p>

      <h3>Guardrail for success</h3>

      <p>
        <span className="liLabel">Lock this sentence:</span> Viral outcomes do
        not imply understanding.
      </p>

      <p>
        This blocks premature theory, prevents “we cracked it” narratives, and
        lets contradictory successes coexist without collapsing the system into a
        playbook.
      </p>

      <hr />

      <h2>Stress test B: what if nothing ever goes viral?</h2>

      <p>
        Assume permanent non-virality. No breakout toys. No viral kill feed.
        Traffic stays modest and inconsistent.
      </p>

      <p>
        Under this model, the output is not virality. The output is:
      </p>

      <ul>
        <li>
          <span className="liLabel">a growing archive of attempts</span>
        </li>
        <li>
          <span className="liLabel">a visible lifecycle system</span>
        </li>
        <li>
          <span className="liLabel">a rigorously enforced failure surface</span>
        </li>
        <li>
          <span className="liLabel">
            a meta-artifact that remains true even when outcomes are brutal
          </span>
        </li>
      </ul>

      <p>
        Most projects break here psychologically: criteria soften, lives extend,
        excuses accumulate, and failure is reframed as “research” to avoid
        discomfort.
      </p>

      <p>
        The real risk is not failure — it’s meaning drift. When nothing happens,
        the temptation is to add commentary to fill the silence.
      </p>

      <h3>Guardrail for silence</h3>

      <p>
        <span className="liLabel">Lock this sentence:</span> We do not add
        meaning when reality provides none.
      </p>

      <p>
        Concretely: no reflective essays to justify non-virality, no
        theory-building to aestheticize failure, no meta-commentary to fill
        quiet. The site remains outcomes and statuses.
      </p>

      <h3>Final symmetry</h3>

      <p>
        The inverse twin of the success guardrail is:
      </p>

      <p>
        <span className="liLabel">Lock this sentence:</span> We do not owe the
        project a success.
      </p>

      <hr />

      <h2>Decision</h2>

      <p>
        The ViralToys model survives both stress tests if — and only if — it
        explicitly refuses the two most common corruptions:
      </p>

      <ul>
        <li>
          <span className="liLabel">Under success:</span> do not claim
          understanding.
        </li>
        <li>
          <span className="liLabel">Under silence:</span> do not manufacture
          meaning.
        </li>
      </ul>

      <p>
        With these two guardrails locked, the system can survive not just three
        viral toys — but thirty — and it can also survive permanent non-virality
        without rotting into narrative.
      </p>

      <hr />

      <p className="meta">
        Log closure: the system must remain coherent under both outcomes —
        success and none.
      </p>
    </>
  ),
},
"using-inversion-to-stop-killing-everything": {
  body: (
    <>
      <div className="kicker">Decision log</div>

      <h1>Using inversion to stop killing everything by accident</h1>

      <p className="meta">
        Mental model used: <strong>Inversion</strong> ·{" "}
        <strong>{formatDate("2026-01-28")}</strong>
      </p>

      <hr />

      <h2>Context</h2>

      <p>
        I’ve been building multiple projects in parallel, all under a single
        operating rule:
      </p>

      <p>
        <strong>
          Each project must accumulate leverage that can plausibly convert into
          freedom (money without daily labor).
        </strong>
      </p>

      <p>
        Leverage here means something that keeps working without my daily
        involvement:
      </p>

      <ul>
        <li>
          <span className="liLabel">artifacts</span> people can use or buy
        </li>
        <li>
          <span className="liLabel">traffic</span> that returns
        </li>
        <li>
          <span className="liLabel">niche gravity</span>
        </li>
        <li>
          <span className="liLabel">trust</span> that reduces friction later
        </li>
      </ul>

      <p>
        Despite this, I kept running into the same thought:
      </p>

      <p>
        <em>If people don’t share what I build, why would anyone buy it?</em>
      </p>

      <p>
        That question felt reasonable — and it was slowly poisoning every
        project.
      </p>

      <h2>Inversion</h2>

      <p>
        Instead of asking:
      </p>

      <p>
        <em>How do I make these projects succeed?</em>
      </p>

      <p>
        I inverted the problem:
      </p>

      <p>
        <em>
          How would I reliably kill all projects and any chance of freedom if I
          continued like this?
        </em>
      </p>

      <p>
        The answer was clear.
      </p>

      <p>
        I would do it by:
      </p>

      <ul>
        <li>
          <span className="liLabel">
            evaluating everything with the same signal
          </span>
        </li>
        <li>
          <span className="liLabel">
            treating social sharing as universal proof of value
          </span>
        </li>
        <li>
          <span className="liLabel">
            waiting for traffic before building anything sellable
          </span>
        </li>
        <li>
          <span className="liLabel">
            assuming lack of virality means lack of usefulness
          </span>
        </li>
      </ul>

      <p>
        This doesn’t fail loudly. It fails quietly, by misclassification.
      </p>

      <h2>The failure mode</h2>

      <p>
        Inversion revealed a precise pattern:
      </p>

      <ul>
        <li>
          <span className="liLabel">I build something meant for private use</span>
        </li>
        <li>
          <span className="liLabel">I judge it by public sharing</span>
        </li>
        <li>
          <span className="liLabel">it doesn’t spread</span>
        </li>
        <li>
          <span className="liLabel">I conclude it has no value</span>
        </li>
        <li>
          <span className="liLabel">
            I abandon it before it can become leverage
          </span>
        </li>
      </ul>

      <p>
        If I keep doing this, the outcome is predictable:
      </p>

      <p>
        <strong>
          I will systematically discard the very things most likely to create
          freedom.
        </strong>
      </p>

      <p>
        That is how everything dies.
      </p>

      <h2>The correction</h2>

      <p>
        The leverage rule itself was not wrong.
      </p>

      <p>
        The mistake was how I was testing leverage.
      </p>

      <p>
        I was using one validation mode for everything.
      </p>

      <p>
        That mode was:
      </p>

      <ul>
        <li><span className="liLabel">sharing</span></li>
        <li><span className="liLabel">virality</span></li>
        <li><span className="liLabel">traffic</span></li>
      </ul>

      <p>
        But different kinds of leverage prove their value in different ways.
      </p>

      <p>
        <strong>
          Some things are meant to be shared. Some things are meant to be bought.
          Using the wrong test makes good work look like failure.
        </strong>
      </p>

      <h2>Two modes</h2>

      <p>
        From here on, I am explicitly separating two modes:
      </p>

      <h3>Mode 1 — Share mode</h3>

      <ul>
        <li><span className="liLabel">free</span></li>
        <li><span className="liLabel">exploratory</span></li>
        <li><span className="liLabel">ambiguous</span></li>
        <li>
          <span className="liLabel">
            validated by sharing or traffic
          </span>
        </li>
      </ul>

      <h3>Mode 2 — Buy mode</h3>

      <ul>
        <li><span className="liLabel">narrow</span></li>
        <li><span className="liLabel">finished</span></li>
        <li><span className="liLabel">intentional</span></li>
        <li>
          <span className="liLabel">
            validated by quiet payment
          </span>
        </li>
      </ul>

      <p>
        Both modes can create leverage. They simply use different signals.
      </p>

      <h2>How this fits the leverage rule</h2>

      <p>
        Nothing about the global leverage rule changes.
      </p>

      <p>
        What changes is how feedback is interpreted:
      </p>

      <ul>
        <li>
          <span className="liLabel">
            artifacts do not need to be socially shareable to be leverage
          </span>
        </li>
        <li>
          <span className="liLabel">
            niche gravity is not proven by virality
          </span>
        </li>
        <li>
          <span className="liLabel">
            trust is often built by restraint, not exposure
          </span>
        </li>
        <li>
          <span className="liLabel">
            traffic is one path to freedom, not the only one
          </span>
        </li>
      </ul>

      <p>
        The leverage types stay the same. The validation signals do not.
      </p>

      <h2>What this decision closes</h2>

      <ul>
        <li>
          <span className="liLabel">
            waiting for traffic before building sellable objects
          </span>
        </li>
        <li>
          <span className="liLabel">
            treating virality as a prerequisite for value
          </span>
        </li>
        <li>
          <span className="liLabel">
            assuming ads are the only monetization path
          </span>
        </li>
        <li>
          <span className="liLabel">
            discarding private-use work because it doesn’t perform publicly
          </span>
        </li>
      </ul>

      <p>
        Most importantly, it closes the habit of killing projects for failing
        the wrong test.
      </p>

      <h2>Uncertainty</h2>

      <p>
        This does not guarantee income.
      </p>

      <p>
        It only guarantees that I stop using a validation method that would
        reliably destroy any chance of freedom over time.
      </p>

      <p>
        This entry exists so that future decisions can reference a closed
        correction instead of reopening the same mistake.
      </p>

      <hr />

      <p className="meta">
        Log closure: validation is now matched to leverage.
      </p>
    </>
  ),
},
"closing-current-cycle-and-repackaging-effort": {
  body: (
    <>
      <div className="kicker">Decision log</div>

      <h1>Closing the current cycle and repackaging the effort</h1>

      <p className="meta">
        Mental model used: <strong>Inversion</strong> ·{" "}
        <strong>{formatDate("2026-01-06")}</strong>
      </p>

      <hr />

      <h2>Context</h2>

      <p>
        Several projects have been live for months. None of them have gained
        meaningful traffic. Attempts to distribute through Instagram and YouTube
        have not changed that.
      </p>

      <p>
        The situation is not ambiguous anymore. The current approach is not
        producing signal.
      </p>

      <p>
        At the same time, the work itself is not empty. There is structure,
        coherence, and accumulated material — especially around EmotionalChords.
      </p>

      <p>
        The question is no longer how to push these projects forward, but how to
        avoid losing both time and accumulated effort.
      </p>

      <h2>Inversion</h2>

      <p>
        If I wanted to guarantee long-term stagnation, I would continue doing the
        following:
      </p>

      <ul>
        <li>
          <span className="liLabel">
            keep trying to “fix” distribution without new evidence
          </span>
        </li>
        <li>
          <span className="liLabel">
            treat lack of traffic as a temporary problem indefinitely
          </span>
        </li>
        <li>
          <span className="liLabel">
            keep building on top of projects that have not proven leverage
          </span>
        </li>
        <li>
          <span className="liLabel">
            ignore the accumulated work because it did not perform
          </span>
        </li>
      </ul>

      <p>
        This path does not fail dramatically. It fails by extending a low-signal
        state indefinitely.
      </p>

      <h2>The failure mode</h2>

      <p>
        The risk is not that the projects are “bad”. The risk is continuing to
        invest in a system that does not convert effort into leverage.
      </p>

      <p>
        If nothing changes, the likely outcome is slow exhaustion:
      </p>

      <ul>
        <li>
          <span className="liLabel">more work</span> without signal
        </li>
        <li>
          <span className="liLabel">more adjustments</span> without direction
        </li>
        <li>
          <span className="liLabel">less willingness</span> to start again
        </li>
      </ul>

      <p>
        That is not failure of ideas. It is failure to stop.
      </p>

      <h2>The decision</h2>

      <p>
        I am closing the current build-distribute loop and switching to a
        repackaging phase.
      </p>

      <p>
        Instead of pushing the existing sites further, I am extracting their
        strongest parts into artifacts.
      </p>

      <p>
        The EmotionalChords work has been repackaged into two books:
      </p>

      <ul>
        <li>
          <a href="https://www.amazon.com/dp/B0GXRPN46Y" target="_blank">
            Book 1
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/dp/B0GXYS5LFZ" target="_blank">
            Book 2
          </a>
        </li>
      </ul>

      <p>
        This converts existing effort into artifacts that can exist independently
        of traffic or algorithms.
      </p>

      <h2>What this closes</h2>

      <ul>
        <li>
          <span className="liLabel">
            continuing to iterate on low-signal distribution channels
          </span>
        </li>
        <li>
          <span className="liLabel">
            expecting delayed traction without structural change
          </span>
        </li>
        <li>
          <span className="liLabel">
            treating unfinished projects as obligations
          </span>
        </li>
      </ul>

      <h2>What this opens</h2>

      <p>
        This decision frees attention for new work.
      </p>

      <p>
        The next projects are not defined yet. The only constraints are:
      </p>

      <ul>
        <li>
          <span className="liLabel">digital-first</span>
        </li>
        <li>
          <span className="liLabel">
            aligned with the leverage rule
          </span>
        </li>
        <li>
          <span className="liLabel">
            oriented toward financial freedom
          </span>
        </li>
      </ul>

      <p>
        Not knowing the next direction is acceptable. Continuing the current one
        without signal is not.
      </p>

      <h2>Uncertainty</h2>

      <p>
        This does not guarantee that the books will succeed.
      </p>

      <p>
        It only guarantees that existing work is not discarded, and that new
        effort is not trapped in the same loop.
      </p>

      <p>
        This entry exists to mark the end of one cycle, and to prevent returning
        to it without new evidence.
      </p>

      <hr />

      <p className="meta">
        Log closure: stop extending low-signal systems; convert effort into
        artifacts and move forward.
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
};

