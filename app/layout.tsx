import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/transition.css"
import "@/styles/style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VaLentin Day",
  description: "A beautifull valentin ap for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center items-center h-[100vh] bg-red-100">
          <div className="bg-red-800 p-10 sm:w-[400px] w-full h-full flex flex-col items-center justify-between">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
