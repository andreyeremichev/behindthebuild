import Link from "next/link";

export default function Header() {
  return (
    <header style={{ marginBottom: "32px" }}>
      <nav
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "baseline",
          fontSize: "16px",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          Behind the Build
        </Link>
        <Link href="/log">Log</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}