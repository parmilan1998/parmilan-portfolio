import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Parmilan | Software Engineer",
    template: "%s | Parmilan",
  },

  description:
    "Portfolio of Parmilan, a Full Stack Software Engineer specializing in Next.js, React, Node.js, Express, TypeScript, MongoDB, and modern web application development.",

  keywords: [
    "Parmilan",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Sri Lanka",
  ],

  authors: [
    {
      name: "Parmilan",
      url: siteUrl,
    },
  ],

  creator: "Parmilan",
  publisher: "Parmilan",

  applicationName: "Parmilan Portfolio",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Parmilan | Software Engineer",
    description:
      "Explore my portfolio featuring modern web applications, full-stack projects, and software engineering experience.",
    siteName: "Parmilan Portfolio",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Parmilan Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Parmilan | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies.",
    images: ["/icon.svg"],
    creator: "@your_twitter_username",
  },

  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
