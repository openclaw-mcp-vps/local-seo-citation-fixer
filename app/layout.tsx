import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO Citation Fixer – Fix NAP Inconsistencies Across 50+ Directories",
  description: "Scan 50+ local directories to find Name, Address, and Phone inconsistencies. Get correction templates with direct links to fix every listing fast."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b710a038-3e1e-44df-b24b-519643a105ce"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
