import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/transition.css"
import "@/styles/style.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VaLentin Day",
  description: "Célébrer l'amour cette Saint-Valentin ! Créez des souvenirs inoubliables, partagez des moments romantiques et trouvez l'inspiration pour rendre cette journée spéciale encore plus magique. ",
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
          <div className="bacground bg-red-800 p-10 sm:w-[400px] w-full h-full flex flex-col items-center justify-between">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
