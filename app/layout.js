import "./globals.css";
import Navbar from "./static-component/Navbar/Navbar";
import Footer from "./static-component/Footer/Footer";
import Svg from "./static-component/Svg";

export const metadata = {
  title: "Connect Events",
  description: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
      </head>
      <body>
        <Navbar />
        {children}
        <Svg />
        <Footer />
      </body>
    </html>
  );
}
