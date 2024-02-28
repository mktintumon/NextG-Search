import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextG Search",
  description: "Inspired and powered by Google search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
