import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { FiUser, FiShoppingCart, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import ThemeToggle from "../ThemeToggle";
import Search from "../Search";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleCartClick = () => {
    toggleCart();
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className="container">
          <div className={styles.headerContent}>
            {/* Logo / Store Name */}
            <div className={styles.logo}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <h1>Tawheed&trade;</h1>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav
              className={`${styles.nav} ${
                isMobileMenuOpen ? styles.navOpen : ""
              }`}
            >
              <Link
                to="/"
                className={`${styles.navLink} ${
                  isActivePage("/") ? styles.active : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`${styles.navLink} ${
                  isActivePage("/products") ? styles.active : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`${styles.navLink} ${
                  isActivePage("/about") ? styles.active : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact-us"
                className={`${styles.navLink} ${
                  isActivePage("/contact-us") ? styles.active : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            {/* Right Section */}
            <div className={styles.rightSection}>
              {/* Search Button */}
              <button
                onClick={openSearch}
                className={styles.iconButton}
                aria-label="Search"
                title="Search products"
              >
                <FiSearch size={20} />
              </button>

              {/* User Account */}
              <Link
                to="/login"
                className={`${styles.iconButton} ${
                  isActivePage("/login") ? styles.active : ""
                }`}
                aria-label="Account"
                title="My Account"
              >
                <FiUser size={20} />
              </Link>

              {/* Shopping Cart */}
              <button
                onClick={handleCartClick}
                className={styles.iconButton}
                aria-label="Shopping Cart"
                title="Shopping Cart"
              >
                <FiShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className={styles.cartBadge}>
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                className={`${styles.burgerMenu} ${
                  isMobileMenuOpen ? styles.burgerOpen : ""
                }`}
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className={styles.mobileOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </header>

      {/* Search Modal */}
      <Search isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Header;
