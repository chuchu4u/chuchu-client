import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChuChu",
  description: "Welcome to ChuChu World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
