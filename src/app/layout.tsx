import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IoT-X - Intelligent IoT Solutions",
  description: "Transform your business with our innovative IoT solutions. Smart home automation, industrial IoT, and smart city solutions.",
  icons: {
    icon: [
      {
        url: '/x-logo.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/x-logo.svg',
    apple: '/x-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/x-logo.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
