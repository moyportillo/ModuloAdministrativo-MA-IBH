import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import Sliderbar from "@/components/general/Sliderbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ministerio Alabanza | IBH",
  description: "Aplicacion para gestionar la administracion de canciones y servidores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="container mx-auto px-5 mt-4">
          {children}
        </main>
      </body>
    </html>
  );
}
