import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CSC Shuttle – Find Your Green Way",
  description: "CSC Shuttle bringt euch direkt zu den besten Cannabis Social Clubs in Spanien und auf den Kanarischen Inseln. Gemeinsame Fahrten, einfacher Zugang, 5€ Rabatt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${oswald.variable} ${inter.variable}`}>
      <body style={{ margin: 0, background: "#0a0a0a" }}>{children}</body>
    </html>
  );
}
