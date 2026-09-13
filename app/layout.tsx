import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caleb Mmesoma — Developer & Digital Product Builder",
  description:
    "Caleb Mmesoma builds thoughtful websites, web applications and digital products from Nigeria.",
  keywords: [
    "Caleb Mmesoma",
    "web developer",
    "software developer",
    "digital product builder",
    "web applications",
    "website development",
    "Nigeria developer",
  ],
  authors: [
    {
      name: "Caleb Mmesoma",
    },
  ],
  creator: "Caleb Mmesoma",
  metadataBase: new URL("https://caleb-mmesoma.vercel.app"),
  openGraph: {
    title: "Caleb Mmesoma — Developer & Digital Product Builder",
    description:
      "I make things. Some of them happen to be websites.",
    type: "website",
    locale: "en_NG",
    siteName: "Caleb Mmesoma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Mmesoma — Developer & Digital Product Builder",
    description:
      "I make things. Some of them happen to be websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}