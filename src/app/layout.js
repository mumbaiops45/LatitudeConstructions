import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Whatsapp from "./components/whatsapp";



export default function RootLayout({ children }) {
  return (
    <html
      lang="en">
      <body cz-shortcut-listen="true">
        <Navbar/>
        {children}
        <Whatsapp/>
        <Footer/>
        </body>
    </html>
  );
}
