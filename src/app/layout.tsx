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
  title: "mhrtk",
  description: "Mihir's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden`}>
      <img
        src="background.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      {children}
    </body>
  </html>
);

}
