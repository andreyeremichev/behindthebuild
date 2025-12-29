import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Behind the Build",
  description:
    "A public decision log written inside uncertainty.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}