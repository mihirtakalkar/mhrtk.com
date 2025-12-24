import type { Metadata } from "next";
import Footer from "./footer";
import Navbar from "./navbar";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-base",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-base",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mhrtk",
  description: "Mihir's personal website.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${grotesk.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        style={{
          backgroundColor: "#0f0b1a",
        }}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
