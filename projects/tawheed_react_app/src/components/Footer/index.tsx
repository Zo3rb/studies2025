import { Link } from "react-router";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footerContent}>
            {/* Brand Section */}
            <div className={styles.footerSection}>
              <div className={styles.brand}>
                <h3 className={styles.brandName}>TAWHEED</h3>
                <p className={styles.brandDescription}>
                  Premium fashion that speaks to your unique personality.
                  Discover timeless pieces crafted with care and attention to
                  detail.
                </p>
              </div>

              {/* Social Links */}
              <div className={styles.socialLinks}>
                <a
                  href="https://facebook.com/tawheed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on Facebook"
                >
                  <FiFacebook />
                </a>
                <a
                  href="https://twitter.com/tawheed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on Twitter"
                >
                  <FiTwitter />
                </a>
                <a
                  href="https://instagram.com/tawheed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on Instagram"
                >
                  <FiInstagram />
                </a>
                <a
                  href="https://linkedin.com/company/tawheed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Follow us on LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerSection}>
              <h4 className={styles.sectionTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/" className={styles.footerLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className={styles.footerLink}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={styles.footerLink}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className={styles.footerLink}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className={styles.footerLink}>
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className={styles.footerLink}>
                    My Orders
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Support */}
            <div className={styles.footerSection}>
              <h4 className={styles.sectionTitle}>Customer Support</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/help" className={styles.footerLink}>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className={styles.footerLink}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className={styles.footerLink}>
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className={styles.footerLink}>
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link to="/size-guide" className={styles.footerLink}>
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link to="/login" className={styles.footerLink}>
                    My Account
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerSection}>
              <h4 className={styles.sectionTitle}>Get in Touch</h4>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FiMapPin className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <span>123 Fashion Street</span>
                    <span>Style City, SC 12345</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <FiPhone className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <a href="tel:+15551234567" className={styles.contactLink}>
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <FiMail className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <a
                      href="mailto:hello@tawheed.com"
                      className={styles.contactLink}
                    >
                      hello@tawheed.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <FiClock className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <span>Mon-Fri: 9AM-6PM</span>
                    <span>Sat: 10AM-4PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={styles.footerSection}>
              <h4 className={styles.sectionTitle}>Stay Updated</h4>
              <p className={styles.newsletterDescription}>
                Subscribe to our newsletter for the latest updates, exclusive
                offers, and style tips.
              </p>

              <form className={styles.newsletterForm}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.newsletterInput}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.newsletterButton}
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <p className={styles.privacyNote}>
                By subscribing, you agree to our{" "}
                <Link to="/privacy" className={styles.privacyLink}>
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>© {currentYear} Tawheed. All rights reserved.</p>
            </div>

            <div className={styles.legalLinks}>
              <Link to="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
              <Link to="/cookies" className={styles.legalLink}>
                Cookie Policy
              </Link>
            </div>

            <div className={styles.paymentMethods}>
              <span className={styles.paymentText}>We Accept:</span>
              <div className={styles.paymentIcons}>
                <span className={styles.paymentIcon}>💳</span>
                <span className={styles.paymentIcon}>🅿️</span>
                <span className={styles.paymentIcon}>💰</span>
                <span className={styles.paymentIcon}>🏧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
