import type { Metadata } from "next";
import "./globals.css";

const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(
    productionDomain ? `https://${productionDomain}` : "http://localhost:3000",
  ),
  title: "Nadine Shokair — UX/UI Designer",
  description:
    "Nadine Shokair is a UX/UI designer based in Cairo, Egypt, building digital products that think clearly and feel deliberate.",
  icons: {
    icon: "/seo/favicon.svg",
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nadine Shokair — UX/UI Designer",
    description:
      "UX/UI designer based in Cairo, Egypt. Digital products that think clearly and feel deliberate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preload"
          href="/fonts/vc-nudge-black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/aeonik-mono-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090b] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
