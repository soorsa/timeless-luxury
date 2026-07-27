import { montserrat } from "@/app/fonts";
import Navbar from "@/components/layout/NavBar";
import Modal from "@/components/ui/Modal";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timeless · Luxury Timepieces",
  description: "Curated collection of the world's finest luxury watches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.className} antialiased`}>
      <body className="max-w-screen overflow-x-auto">
        <main className="w-full">
          <Modal />
          <Navbar />
          <div className="mx-auto px-2 sm:px-6 py-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
