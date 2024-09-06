
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({children}) {
  return (
    <html>
      <head>
        
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
