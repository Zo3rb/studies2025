import { assets } from "../assets";
import styles from "../styles/pages/About.module.scss";

const About = () => {
  const { about: aboutAssets, aboutContent } = assets;

  return (
    <div className={styles.about}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <div
          className={styles.bannerBackground}
          style={{ backgroundImage: `url(${aboutAssets.banner})` }}
        >
          <div className={styles.bannerOverlay}>
            <div className="container">
              <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>
                  {aboutContent.banner.title}
                </h1>
                <p className={styles.bannerSubtitle}>
                  {aboutContent.banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCard}>
              <div
                className={styles.heroBackground}
                style={{ backgroundImage: `url(${aboutAssets.hero1})` }}
              >
                <div className={styles.heroOverlay}>
                  <div className={styles.heroContent}>
                    <h2 className={styles.heroTitle}>
                      {aboutContent.hero.section1.title}
                    </h2>
                    <p className={styles.heroDescription}>
                      {aboutContent.hero.section1.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.heroCard}>
              <div
                className={styles.heroBackground}
                style={{ backgroundImage: `url(${aboutAssets.hero2})` }}
              >
                <div className={styles.heroOverlay}>
                  <div className={styles.heroContent}>
                    <h2 className={styles.heroTitle}>
                      {aboutContent.hero.section2.title}
                    </h2>
                    <p className={styles.heroDescription}>
                      {aboutContent.hero.section2.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className={styles.foundersSection}>
        <div className="container">
          <h2 className={styles.sectionHeader}>The Founder</h2>
          <div className={styles.foundersGrid}>
            {aboutContent.founders.map((founder, index) => (
              <div key={index} className={styles.founderCard}>
                <div className={styles.founderImageWrapper}>
                  <img
                    src={
                      aboutAssets.founders[
                        founder.image as keyof typeof aboutAssets.founders
                      ]
                    }
                    alt={founder.name}
                    className={styles.founderImage}
                  />
                </div>
                <div className={styles.founderInfo}>
                  <h3 className={styles.founderName}>{founder.name}</h3>
                  <p className={styles.founderRole}>{founder.role}</p>
                  <p className={styles.founderBio}>{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <h2 className={styles.sectionHeader}>Testimonials</h2>
          <div className={styles.testimonialsContainer}>
            {aboutContent.testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialImage}>
                  <img
                    src={
                      aboutAssets.testimonials[
                        testimonial.image as keyof typeof aboutAssets.testimonials
                      ]
                    }
                    alt={testimonial.name}
                  />
                </div>
                <div className={styles.testimonialContent}>
                  <blockquote className={styles.testimonialQuote}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className={styles.testimonialAuthor}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
