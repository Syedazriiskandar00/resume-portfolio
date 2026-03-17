import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azridev.my"),
  title: "Syed Azri | AI Solutions Engineer",
  description:
    "I build AI-powered products that solve real business problems, from concept to deployment. Former sales exec turned self-taught developer who shipped 3 production SaaS products in under a year.",
  keywords: [
    "AI Solutions Engineer",
    "Malaysia",
    "SaaS developer",
    "AI products",
    "full-stack developer",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Syed Azri" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azridev.my",
    siteName: "Syed Azri",
    title: "Syed Azri | AI Solutions Engineer",
    description:
      "Former sales exec turned self-taught developer. Shipped 3 production SaaS products in under a year.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Azri | AI Solutions Engineer",
    description:
      "Former sales exec turned self-taught developer. Shipped 3 production SaaS products in under a year.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://azridev.my",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
