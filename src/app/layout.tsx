import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const lovelyFont = Oswald({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Мое приложение на Next.js",
  description: "Я изучаю Next.js последней версии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lovelyFont.className} ${lovelyFont.className}y`}>{children}</body>
    </html>
  );
}
