import "@/common/design/globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "A simple e-commerce app",
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
