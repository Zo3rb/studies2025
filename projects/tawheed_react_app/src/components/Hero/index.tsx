import { Link } from "react-router";
import { FiArrowRight, FiStar, FiShield, FiTruck } from "react-icons/fi";
import { assets } from "../../assets";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const { hero, content } = assets;

  return (
    <section className={styles.hero}>
      {/* Background Images */}
      <div className={styles.backgroundContainer}>
        <div
          className={`${styles.background} ${styles.backgroundLight}`}
          style={{ backgroundImage: `url(${hero.backgroundLight})` }}
        />
        <div
          className={`${styles.background} ${styles.backgroundDark}`}
          style={{ backgroundImage: `url(${hero.backgroundDark})` }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            {/* Badge */}
            <div className={styles.badge}>
              <FiStar className={styles.badgeIcon} />
              <span>New Collection 2025</span>
            </div>

            {/* Main Heading */}
            <h1 className={styles.mainHeading}>{content.mainHeading}</h1>

            {/* Sub Heading */}
            <p className={styles.subHeading}>{content.subHeading}</p>

            {/* Description */}
            <p className={styles.description}>{content.description}</p>

            {/* Features */}
            <div className={styles.features}>
              <div className={styles.feature}>
                <FiTruck className={styles.featureIcon} />
                <span>Free Shipping</span>
              </div>
              <div className={styles.feature}>
                <FiShield className={styles.featureIcon} />
                <span>Secure Payment</span>
              </div>
              <div className={styles.feature}>
                <FiStar className={styles.featureIcon} />
                <span>Premium Quality</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className={styles.actions}>
              <Link to="/products" className={styles.primaryButton}>
                <span>{content.ctaText}</span>
                <FiArrowRight className={styles.buttonIcon} />
              </Link>

              <Link to="/products" className={styles.secondaryButton}>
                {content.ctaSecondaryText}
              </Link>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Happy Customers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Products</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4.9★</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
            </div>
          </div>

          {/* Visual Element (optional) */}
          <div className={styles.visualContent}>
            <div className={styles.floatingCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardImage}>
                  <img src="https://placehold.co/80" />
                </div>
                <div className={styles.cardText}>
                  <h4>Trending Now</h4>
                  <p>Premium Cotton Collection</p>
                  <span className={styles.cardPrice}>From $29.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
