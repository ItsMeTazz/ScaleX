import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Chakra_Petch } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header/Header";
import BackgroundDecoration from "../components/BackgroundDecoration";
import { Metadata } from "next";

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ScaleX",
    description: "",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${chakra.className}`}>
        <BackgroundDecoration />
        <main className="relative flex flex-col gap-20 items-center justify-center overflow-hidden">
          <Header />
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
