import { useState, useEffect } from "react";
import { Link } from "react-router";
import ProductCard from "../ProductCard";
import type { Product } from "../ProductCard";
import { FiArrowRight } from "react-icons/fi";
import { assets } from "../../assets";
import styles from "./SaleProducts.module.scss";

// Updated mock data for top sellers with real images
const mockTopSellers: Product[] = [
  {
    _id: "top_1",
    name: "Bestseller Premium Jeans",
    price: 79.99,
    originalPrice: 99.99,
    image: assets.products.topSellers.top_sell_1,
    category: "Fashion",
    subCategory: "Jeans",
    description:
      "Our most popular premium jeans with perfect fit and superior quality denim.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["dark-blue", "black", "light-blue"],
    rating: 4.8,
    reviews: 1247,
    bestSeller: true,
    isNew: false,
    isSale: true,
    date: "2023-12-15",
  },
  {
    _id: "top_2",
    name: "Popular Casual Blazer",
    price: 129.99,
    originalPrice: 159.99,
    image: assets.products.topSellers.top_sell_2,
    category: "Fashion",
    subCategory: "Blazers",
    description:
      "Professional blazer that's become our customers' absolute favorite for versatility.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["navy", "black", "charcoal", "brown"],
    rating: 4.9,
    reviews: 892,
    bestSeller: true,
    isNew: false,
    isSale: true,
    date: "2023-11-20",
  },
  {
    _id: "top_3",
    name: "Trending Designer Dress",
    price: 95.99,
    originalPrice: 129.99,
    image: assets.products.topSellers.top_sell_3,
    category: "Fashion",
    subCategory: "Dresses",
    description:
      "Elegant designer dress that's been flying off our shelves this season.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "navy", "burgundy", "emerald"],
    rating: 4.7,
    reviews: 634,
    bestSeller: true,
    isNew: false,
    isSale: true,
    date: "2023-10-30",
  },
  {
    _id: "top_4",
    name: "Classic Polo Collection",
    price: 39.99,
    originalPrice: 54.99,
    image: assets.products.topSellers.top_sell_4,
    category: "Fashion",
    subCategory: "Polo",
    description:
      "Timeless polo shirt collection that never goes out of style and loved by thousands.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["white", "navy", "red", "green", "pink"],
    rating: 4.6,
    reviews: 1589,
    bestSeller: true,
    isNew: false,
    isSale: true,
    date: "2023-09-15",
  },
];

const SaleProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchTopSellers = () => {
      setTimeout(() => {
        setProducts(mockTopSellers);
        setLoading(false);
      }, 1000);
    };

    fetchTopSellers();
  }, []);

  if (loading) {
    return (
      <section className={styles.saleProducts}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.headerSkeleton}>
              <div className={styles.titleSkeleton}></div>
              <div className={styles.subtitleSkeleton}></div>
            </div>
          </div>
          <div className={styles.productsGrid}>
            {[...Array(4)].map((_, index) => (
              <div key={index} className={styles.productSkeleton}>
                <div className={styles.imageSkeleton}></div>
                <div className={styles.infoSkeleton}>
                  <div className={styles.nameSkeleton}></div>
                  <div className={styles.priceSkeleton}></div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.ctaSkeleton}></div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.saleProducts}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>TOP SELLERS</h2>
          <p className={styles.subtitle}>Browse our top-selling products</p>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div
              key={product._id}
              className={styles.productWrapper}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaContainer}>
          <Link to="/products" className={styles.ctaButton}>
            <span>SHOP NOW</span>
            <FiArrowRight className={styles.ctaIcon} />
          </Link>
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <p className={styles.infoText}>
            Free shipping on orders over $50 • 30-day returns • Secure checkout
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaleProducts;
