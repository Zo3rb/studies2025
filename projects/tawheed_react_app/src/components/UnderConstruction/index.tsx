import {
  FiTool,
  FiMail,
  FiArrowLeft,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { Link } from "react-router";
import styles from "./UnderConstruction.module.scss";

interface UnderConstructionProps {
  pageTitle: string;
  pageDescription: string;
  expectedCompletion?: string;
  features?: string[];
  contactEmail?: string;
  showBackButton?: boolean;
}

const UnderConstruction = ({
  pageTitle,
  pageDescription,
  expectedCompletion = "Coming Soon",
  features = [],
  contactEmail = "support@tawheed.com",
  showBackButton = true,
}: UnderConstructionProps) => {
  return (
    <div className={styles.underConstruction}>
      <div className="container">
        <div className={styles.content}>
          {/* Animated SVG Construction Icon */}
          <div className={styles.iconContainer}>
            <svg
              className={styles.constructionSvg}
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="var(--primary)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="20 10"
                className={styles.rotatingCircle}
              />

              {/* Inner Circle */}
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="var(--primary)"
                opacity="0.1"
                className={styles.pulsingCircle}
              />

              {/* Construction Tools */}
              <g className={styles.tools}>
                {/* Hammer */}
                <rect
                  x="70"
                  y="85"
                  width="60"
                  height="8"
                  rx="4"
                  fill="var(--secondary)"
                  className={styles.hammer}
                />
                <rect
                  x="120"
                  y="75"
                  width="15"
                  height="28"
                  rx="7"
                  fill="var(--text-primary)"
                  className={styles.hammerHead}
                />

                {/* Wrench */}
                <circle
                  cx="85"
                  cy="120"
                  r="8"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="3"
                  className={styles.wrench}
                />
                <rect
                  x="82"
                  y="115"
                  width="25"
                  height="4"
                  fill="var(--secondary)"
                  className={styles.wrenchHandle}
                />
              </g>

              {/* Floating Dots */}
              <circle
                cx="130"
                cy="60"
                r="3"
                fill="var(--primary)"
                className={styles.dot1}
              />
              <circle
                cx="160"
                cy="80"
                r="2"
                fill="var(--secondary)"
                className={styles.dot2}
              />
              <circle
                cx="40"
                cy="70"
                r="2.5"
                fill="var(--primary)"
                className={styles.dot3}
              />
              <circle
                cx="60"
                cy="140"
                r="2"
                fill="var(--secondary)"
                className={styles.dot4}
              />
              <circle
                cx="140"
                cy="150"
                r="3"
                fill="var(--primary)"
                className={styles.dot5}
              />
            </svg>
          </div>

          {/* Main Content */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p className={styles.description}>{pageDescription}</p>

            {/* Status Badge */}
            <div className={styles.statusBadge}>
              <FiTool className={styles.statusIcon} />
              <span>{expectedCompletion}</span>
            </div>

            {/* Features Preview */}
            {features.length > 0 && (
              <div className={styles.featuresPreview}>
                <h3 className={styles.featuresTitle}>What's Coming:</h3>
                <ul className={styles.featuresList}>
                  {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <FiCheckCircle className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className={styles.actions}>
              {showBackButton && (
                <Link to="/" className={styles.backButton}>
                  <FiArrowLeft />
                  <span>Back to Home</span>
                </Link>
              )}

              <a
                href={`mailto:${contactEmail}?subject=Question about ${pageTitle}`}
                className={styles.contactButton}
              >
                <FiMail />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <FiClock className={styles.timelineIcon} />
                <div className={styles.timelineContent}>
                  <span className={styles.timelineLabel}>Expected Launch</span>
                  <span className={styles.timelineValue}>
                    {expectedCompletion}
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>
                Get Notified When Ready
              </h4>
              <p className={styles.newsletterText}>
                Be the first to know when this page goes live!
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>Notify Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
