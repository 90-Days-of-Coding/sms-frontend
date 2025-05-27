import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import ThemeProviderWrapper from "./themeProviderWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mont",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decks",
  description: "A student management system tailored to just students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} antialiased text-base sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl md:text-md`}
      >
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
