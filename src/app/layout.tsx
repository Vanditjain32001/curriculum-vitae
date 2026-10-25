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
  title: "Vandit Jain | Strategic Backend Software Engineer (Go & Microservices)",
  description:
    "Portfolio of Vandit Jain — Backend Software Engineer with 3+ years experience specializing in Golang, microservices architecture, high-throughput telematics pipelines, and AI-augmented engineering workflows.",
  keywords: [
    "Vandit Jain",
    "Backend Engineer",
    "Golang",
    "Go Developer",
    "Microservices",
    "Kafka",
    "PostgreSQL",
    "Redis",
    "Distributed Systems",
    "Catena Clearing",
    "RemoteState",
  ],
  authors: [{ name: "Vandit Jain" }],
  openGraph: {
    title: "Vandit Jain | Strategic Backend Software Engineer",
    description:
      "Golang, Distributed Systems, Telematics Pipelines, and AI-Augmented Engineering.",
    url: "https://github.com/Vanditjain32001",
    siteName: "Vandit Jain Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0b0f17] text-slate-100 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
