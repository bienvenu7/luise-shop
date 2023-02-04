import Footer from "./Footer";
import "./globals.scss";
import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
