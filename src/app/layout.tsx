import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";

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
  const theme = (await cookies()).get("theme")?.value || "light";

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              var theme = document.documentElement.getAttribute('data-theme') || 'light';
              document.documentElement.setAttribute('data-theme', theme);
            })();
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 dark:text-white`}
      >
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
