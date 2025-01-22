import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import  { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Loom",
  description: "  Urban Loom ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider dynamic>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-right" toastOptions={{
          style:{
            background:"#000000",
            color:"#ffffff"
          }
        }}/>
      </body>
    </html>
    </ClerkProvider>
  );
}
