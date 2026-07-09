import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dafa Jaya Priyatna | Motion Graphic Designer & Web Developer",
  description:
    "Portfolio of Dafa Jaya Priyatna - Motion Graphic Designer, Video Editor, and Web Developer based in Jakarta, Indonesia. Creating stunning visual experiences and modern websites.",
  keywords: [
    "Motion Graphic Designer",
    "Video Editor",
    "Web Developer",
    "Portfolio",
    "After Effects",
    "React Developer",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Dafa Jaya Priyatna" }],
  creator: "Dafa Jaya Priyatna",
  publisher: "Dafa Jaya Priyatna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dafajaya.dev",
    siteName: "Dafa Jaya Priyatna Portfolio",
    title: "Dafa Jaya Priyatna | Motion Graphic Designer & Web Developer",
    description:
      "Creating stunning visual experiences and modern websites. Motion Graphics, Video Editing, Web Development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dafa Jaya Priyatna Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dafa Jaya Priyatna | Motion Graphic Designer & Web Developer",
    description:
      "Creating stunning visual experiences and modern websites. Motion Graphics, Video Editing, Web Development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
