export type Post = {
  slug: string;
  title: string;
  dateISO: string; // YYYY-MM-DD
  model:
    | "Inversion"
    | "Base Rates"
    | "Opportunity Cost"
    | "Second-Order"
    | "Confirmation Bias"
    | "None";
  summary?: string;
};

export const POSTS: Post[] = [
  {
    slug: "why-this-log-exists",
    title: "Why this log exists: decisions made inside the void",
    dateISO: "2025-12-29",
    model: "None",
  },
  {
    slug: "no-comments-on-site",
    title: "Should this log allow on-site comments and questions?",
    dateISO: "2025-12-29",
    model: "Inversion",
    summary:
      "Using inversion to decide whether comments would help—or quietly ruin—the function of the log.",
  },
  {
  slug: "what-to-do-with-an-existing-social-account",
  title: "What should happen to an existing social account after a product split?",
  dateISO: "2025-12-29",
  model: "Inversion",
}
];

export function formatDate(iso: string) {
  // Keep it simple + stable; no locale surprises in builds
  // iso: YYYY-MM-DD
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[(m ?? 1) - 1]} ${d}, ${y}`;
}