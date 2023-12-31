import "./globals.css";
import Navbar from "./static-component/Navbar/Navbar";
import Footer from "./static-component/Footer/Footer";

export const metadata = {
  title: "Connect Events",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
