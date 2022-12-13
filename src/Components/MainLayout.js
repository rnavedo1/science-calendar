import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
