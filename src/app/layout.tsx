import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700'], // Tentukan variasi berat font yang ingin digunakan
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "Rifky Hilman",
  description: "Rifky Hilman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <div className="flex flex-col items-center  w-full h-max min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
