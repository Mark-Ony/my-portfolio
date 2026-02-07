
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark's Portfolio",
  description: "Welcome to Mark's professional portfolio showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
      <body className={`${nunitoSans.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
        
          <main className="flex-1">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
