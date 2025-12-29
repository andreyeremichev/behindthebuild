import Link from "next/link";

export default function NotFound() {
  return (
    <div className="paper">
      <div className="kicker">Not found</div>
      <h1>This page doesn’t exist.</h1>
      <p>
        Go back to <Link href="/">the log</Link>.
      </p>
    </div>
  );
}