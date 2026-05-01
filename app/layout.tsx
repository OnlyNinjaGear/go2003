import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/registry/steam2003/ui/tooltip";
import { Toaster } from "@/registry/steam2003/ui/sonner";

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
      <body><TooltipProvider>{children}</TooltipProvider><Toaster /></body>
    </html>
  );
}
