import "./globals.css";
import Footer from '@/components/Footer'


export const metadata = {
  title: "NextG Search",
  description: "Inspired and powered by Google search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
