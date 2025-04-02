import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Adjust the path as needed

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WAM AI",
  description: "Autopilot your Dealership with AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
          <footer className="bg-gray-800 text-white py-4 text-center">
            <p>!?!?!??!?!?! FUCKOFF MATE !?!?!?!??!??</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
