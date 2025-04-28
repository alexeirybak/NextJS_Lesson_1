import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Мое приложение на Next.js",
    template: "%s | Мое приложение на Next.js",
  },
  description: "Я изучаю Next.js последней версии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-blue-300">Шапка сайта</header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-400">Подвал сайта</footer>
      </body>
    </html>
  );
}
