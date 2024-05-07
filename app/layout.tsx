import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FrameImpacts",
  description: "Social Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#fff1d0]">
        {/* Header */}
        <header className=" sticky top-0 bg-[#073b4c]/90 z-50">
          <Header />
        </header>

        {children}
        <footer className="bottom-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
