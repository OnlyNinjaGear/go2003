import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "go2003 — Steam 2003 shadcn registry",
  description:
    "A custom shadcn registry that re-skins UI primitives in the visual language of Valve's Steam client circa 2003.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
