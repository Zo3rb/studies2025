import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import type { Product } from "../ProductCard";
import { assets } from "../../assets";
import styles from "./NewProducts.module.scss";

// Updated mock data with real images and better product details
const mockNewProducts: Product[] = [
  {
    _id: "new_1",
    name: "Premium Cotton Henley",
    price: 45.99,
    originalPrice: 59.99,
    image: assets.products.newProducts.new_men_1,
    category: "Men's Fashion",
    subCategory: "T-Shirts",
    description:
      "Comfortable premium cotton henley perfect for casual wear with modern fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["navy", "white", "gray", "black"],
    rating: 4.5,
    reviews: 128,
    bestSeller: false,
    isNew: true,
    isSale: true,
    date: "2024-01-20",
  },
  {
    _id: "new_2",
    name: "Classic Denim Shirt",
    price: 65.99,
    image: assets.products.newProducts.new_men_2,
    category: "Men's Fashion",
    subCategory: "Shirts",
    description: "Versatile denim shirt with modern cut and premium finish.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["blue", "light-blue", "black", "gray"],
    rating: 4.7,
    reviews: 89,
    bestSeller: false,
    isNew: true,
    isSale: false,
    date: "2024-01-18",
  },
  {
    _id: "new_3",
    name: "Urban Casual Jacket",
    price: 89.99,
    originalPrice: 119.99,
    image: assets.products.newProducts.new_men_3,
    category: "Men's Fashion",
    subCategory: "Jackets",
    description:
      "Modern urban jacket perfect for layering with contemporary style.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["khaki", "black", "navy", "olive"],
    rating: 4.6,
    reviews: 156,
    bestSeller: true,
    isNew: true,
    isSale: true,
    date: "2024-01-15",
  },
  {
    _id: "new_4",
    name: "Comfortable Hoodie",
    price: 55.99,
    image: assets.products.newProducts.new_men_4,
    category: "Men's Fashion",
    subCategory: "Hoodies",
    description: "Ultra-soft hoodie with perfect fit for everyday comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["gray", "black", "navy", "burgundy"],
    rating: 4.4,
    reviews: 203,
    bestSeller: false,
    isNew: true,
    isSale: false,
    date: "2024-01-12",
  },
  {
    _id: "new_5",
    name: "Elegant Blouse",
    price: 42.99,
    originalPrice: 55.99,
    image: assets.products.newProducts.new_women_1,
    category: "Women's Fashion",
    subCategory: "Blouses",
    description: "Sophisticated blouse perfect for office or casual occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["white", "pink", "blue", "black"],
    rating: 4.8,
    reviews: 174,
    bestSeller: false,
    isNew: true,
    isSale: true,
    date: "2024-01-10",
  },
  {
    _id: "new_6",
    name: "Casual Summer Dress",
    price: 68.99,
    image: assets.products.newProducts.new_women_2,
    category: "Women's Fashion",
    subCategory: "Dresses",
    description:
      "Light and breezy summer dress with beautiful floral patterns.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["floral-blue", "floral-pink", "white", "yellow"],
    rating: 4.9,
    reviews: 267,
    bestSeller: true,
    isNew: true,
    isSale: false,
    date: "2024-01-08",
  },
  {
    _id: "new_7",
    name: "Trendy Cardigan",
    price: 52.99,
    originalPrice: 69.99,
    image: assets.products.newProducts.new_women_3,
    category: "Women's Fashion",
    subCategory: "Cardigans",
    description:
      "Cozy cardigan perfect for layering with modern feminine touch.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["beige", "pink", "gray", "navy"],
    rating: 4.5,
    reviews: 142,
    bestSeller: false,
    isNew: true,
    isSale: true,
    date: "2024-01-05",
  },
  {
    _id: "new_8",
    name: "Chic Jumpsuit",
    price: 79.99,
    image: assets.products.newProducts.new_women_4,
    category: "Women's Fashion",
    subCategory: "Jumpsuits",
    description: "Elegant jumpsuit combining comfort with sophisticated style.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "navy", "burgundy", "olive"],
    rating: 4.7,
    reviews: 198,
    bestSeller: false,
    isNew: true,
    isSale: false,
    date: "2024-01-03",
  },
];

const NewProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with realistic delay
    const fetchNewProducts = () => {
      setTimeout(() => {
        setProducts(mockNewProducts);
        setLoading(false);
      }, 800);
    };

    fetchNewProducts();
  }, []);

  if (loading) {
    return (
      <section className={styles.newProducts}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.headerSkeleton}>
              <div className={styles.titleSkeleton}></div>
              <div className={styles.subtitleSkeleton}></div>
            </div>
          </div>
          <div className={styles.productsGrid}>
            {[...Array(8)].map((_, index) => (
              <div key={index} className={styles.productSkeleton}>
                <div className={styles.imageSkeleton}></div>
                <div className={styles.infoSkeleton}>
                  <div className={styles.nameSkeleton}></div>
                  <div className={styles.priceSkeleton}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.newProducts}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>DISCOVER NEW PRODUCTS</h2>
          <p className={styles.subtitle}>Recently added products</p>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div
              key={product._id}
              className={styles.productWrapper}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Optional: View All Products Link */}
        <div className={styles.viewAllContainer}>
          <a href="/products" className={styles.viewAllLink}>
            View All New Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
