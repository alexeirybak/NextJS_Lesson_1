import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ServerRoutePage from "./server-route/page";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 dark:text-white`}
        >
          <main className="p-8">{children}</main>
          <ServerRoutePage />
        </body>
      </ThemeProvider>
    </html>
  );
}
