import type { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import CartSidebar from "../Cart/CartSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
        <CartSidebar />
      </div>
    </Router>
  );
};

export default Layout;
