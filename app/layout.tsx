import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { AosInit } from "./_components/AosInit";

export const metadata: Metadata = {
  icons: {
    icon: "/images/home/fav-icon.png",
  },
  title: "heyPatient",
  description: "HeyPatient helps hospitals and clinics reduce administrative workload while enhancing patient engagement and satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased selection:bg-[#08949E] selection:text-white flex flex-col min-h-screen pt-20"
      >
        <AosInit />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
