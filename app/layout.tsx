import { montserrat } from "@/app/fonts";
import Navbar from "@/components/layout/NavBar";
import Modal from "@/components/ui/Modal";
import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1567743708180658');
fbq('track', 'PageView');
          `,
          }}
        />
      </head>
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
