// ============================================
// ASSETS EXPORT BARREL
// ============================================

// Hero Images
import heroBgLight from "./images/hero-bg-light.jpg";
import heroBgDark from "./images/hero-bg-dark.jpg";

// About Page Images
import aboutBanner from "./images/about_banner.jpg";
import aboutHero1 from "./images/about_hero_1.png";
import aboutHero2 from "./images/about_hero_2.png";
import founder1 from "./images/founder_1.png";
import founder2 from "./images/founder_2.png";
import founder3 from "./images/founder_3.png";
import founder4 from "./images/founder_4.png";
import testimonial1 from "./images/testimonial_1.png";
import testimonial2 from "./images/testimonial_2.png";
import testimonial3 from "./images/testimonial_3.png";

// Contact Page Images
import contactBanner from "./images/contact_banner.jpg";

// Logo/Brand Images (add these as needed)
// import logo from './images/logo.png';
// import logoWhite from './images/logo-white.png';

// ============================================
// HERO ASSETS
// ============================================
export const heroAssets = {
  backgroundLight: heroBgLight,
  backgroundDark: heroBgDark,
} as const;

// ============================================
// ABOUT PAGE ASSETS
// ============================================
export const aboutAssets = {
  banner: aboutBanner,
  hero1: aboutHero1,
  hero2: aboutHero2,
  founders: {
    founder1,
    founder2,
    founder3,
    founder4,
  },
  testimonials: {
    testimonial1,
    testimonial2,
    testimonial3,
  },
} as const;

// ============================================
// CONTACT PAGE ASSETS
// ============================================
export const contactAssets = {
  banner: contactBanner,
} as const;

// ============================================
// BRAND ASSETS
// ============================================
export const brandAssets = {
  // logo: logo,
  // logoWhite: logoWhite,
} as const;

// ============================================
// CONTACT PAGE CONTENT DATA
// ============================================
export const contactContent = {
  banner: {
    title: "CONTACT US",
    subtitle: "Get in Touch with Our Team",
  },
  form: {
    title: "Send us a Message",
    subtitle:
      "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
      },
      message: {
        label: "Message",
        placeholder: "Tell us how we can help you...",
      },
    },
    submitText: "SEND MESSAGE",
  },
  visitUs: {
    title: "Visit Us",
    address: {
      street: "123 Fashion Street",
      city: "Style City, SC 12345",
      country: "United States",
      coordinates: {
        lat: 40.7128,
        lng: -74.006, // New York coordinates as example
      },
    },
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  getInTouch: {
    title: "Get in Touch",
    phone: "+1 (555) 123-4567",
    email: "hello@tawheed.com",
    support: "support@tawheed.com",
  },
} as const;

// ============================================
// ABOUT PAGE CONTENT DATA
// ============================================
export const aboutContent = {
  banner: {
    title: "ABOUT TAWHEED",
    subtitle: "Discover Our Story",
  },
  hero: {
    section1: {
      title: "Our Mission",
      description:
        "At Tawheed, we believe fashion should be accessible, sustainable, and expressive of individual style. Our mission is to provide premium quality clothing that empowers people to express their unique personality while maintaining ethical and sustainable practices.",
    },
    section2: {
      title: "Our Vision",
      description:
        "To become the leading destination for conscious fashion lovers who value quality, sustainability, and timeless style. We envision a world where fashion contributes positively to both people and the planet.",
    },
  },
  founders: [
    {
      name: "HM Jawad",
      role: "CEO & Founder",
      image: "founder1",
      bio: "Visionary leader with 15+ years in fashion industry",
    },
    {
      name: "Furgan Abid",
      role: "CTO & Co-Founder",
      image: "founder2",
      bio: "Tech innovator driving digital transformation",
    },
    {
      name: "Abdullah Ah",
      role: "Creative Director",
      image: "founder3",
      bio: "Award-winning designer with global experience",
    },
    {
      name: "Abrar Khan",
      role: "Operations Director",
      image: "founder4",
      bio: "Supply chain expert ensuring quality delivery",
    },
  ],
  testimonials: [
    {
      image: "testimonial1",
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      quote:
        "Tawheed has completely transformed my wardrobe. The quality is exceptional, and I love how each piece tells a story. Their commitment to sustainability makes me feel good about every purchase I make.",
    },
    {
      image: "testimonial2",
      name: "Michael Chen",
      role: "Entrepreneur",
      quote:
        "As someone who values both style and ethics, Tawheed is my go-to brand. The attention to detail is remarkable, and their customer service is outstanding. I've recommended them to all my friends and family.",
    },
    {
      image: "testimonial3",
      name: "Emily Rodriguez",
      role: "Stylist",
      quote:
        "Working with Tawheed's pieces is a joy. The fabric quality, the cut, the finishing - everything is perfection. My clients always ask where I source these beautiful pieces from. Tawheed is definitely a game-changer in the industry.",
    },
  ],
} as const;

// ============================================
// STATIC PRODUCT MOCK DATA (for development)
// ============================================
// New Products Images
import new_men_1 from "./images/new_men_1.png";
import new_men_2 from "./images/new_men_2.png";
import new_men_3 from "./images/new_men_3.png";
import new_men_4 from "./images/new_men_4.png";
import new_women_1 from "./images/new_women_1.png";
import new_women_2 from "./images/new_women_2.png";
import new_women_3 from "./images/new_women_3.png";
import new_women_4 from "./images/new_women_4.png";

// Top Selling Products Images
import top_sell_1 from "./images/top_sell_1.png";
import top_sell_2 from "./images/top_sell_2.png";
import top_sell_3 from "./images/top_sell_3.png";
import top_sell_4 from "./images/top_sell_4.png";

// ============================================
// HERO CONTENT DATA
// ============================================
export const heroContent = {
  mainHeading: "Discover Your Perfect Style",
  subHeading: "Premium fashion that speaks to your unique personality",
  description:
    "Explore our curated collection of contemporary clothing, accessories, and lifestyle products designed for the modern individual.",
  ctaText: "Shop Now",
  ctaSecondaryText: "View Collection",
  features: [
    "Free shipping on orders over $50",
    "30-day easy returns",
    "Sustainable fashion choices",
  ],
} as const;

// ============================================
// EXPORT ALL ASSETS
// ============================================
export const assets = {
  hero: heroAssets,
  about: aboutAssets,
  contact: contactAssets,
  brand: brandAssets,
  content: heroContent,
  aboutContent: aboutContent,
  contactContent: contactContent,
  // Product Images
  products: {
    newProducts: {
      new_men_1,
      new_men_2,
      new_men_3,
      new_men_4,
      new_women_1,
      new_women_2,
      new_women_3,
      new_women_4,
    },
    topSellers: {
      top_sell_1,
      top_sell_2,
      top_sell_3,
      top_sell_4,
    },
  },
} as const;

// Default export for convenience
export default assets;
