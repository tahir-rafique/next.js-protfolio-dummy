import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar.js";
import Footer from "@/components/footer/footer.js";
import { ThemeProvider } from '@/context/ThemeContext';
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tahir Rafique",
  description: "Tahir Rafique, a man learning code day by day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider >
          <SessionProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>

    </html>
  );
}
