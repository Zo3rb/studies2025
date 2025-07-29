import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  FiHeart,
  FiShare2,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiTruck,
  FiShield,
  FiRotateCcw,
  FiInfo,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import styles from "../styles/pages/Product.module.scss";

// Mock product data (same as in Collection)
const MOCK_PRODUCTS = [
  {
    _id: "1",
    name: "Premium Cotton Henley",
    image: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f37f8052?w=800",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    ],
    price: 89,
    oldPrice: 120,
    description:
      "Comfortable premium cotton henley with a modern fit. Made from 100% organic cotton, this versatile piece is perfect for both casual and semi-formal occasions. Features a classic button placket, soft collar, and relaxed fit that moves with you throughout the day.",
    category: "Men's Fashion",
    subCategory: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy", "Gray"],
    bestseller: true,
    date: 1234567890000,
    rating: 4.5,
    reviews: 128,
    features: [
      "100% Organic Cotton",
      "Pre-shrunk fabric",
      "Machine washable",
      "Classic fit",
      "Reinforced seams",
    ],
    specifications: {
      material: "100% Organic Cotton",
      weight: "200 GSM",
      fit: "Regular",
      origin: "Made in USA",
      care: "Machine wash cold, tumble dry low",
    },
  },
  // Add more mock products for related products section
  {
    _id: "2",
    name: "Classic Denim Shirt",
    image: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    ],
    price: 125,
    description: "Timeless denim shirt perfect for casual occasions",
    category: "Men's Fashion",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL"],
    colors: ["Blue", "Black"],
    bestseller: false,
    date: 1234567880000,
    rating: 4.2,
    reviews: 89,
  },
  {
    _id: "3",
    name: "Urban Casual Jacket",
    image: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    ],
    price: 199,
    oldPrice: 249,
    description: "Stylish urban jacket for the modern gentleman",
    category: "Men's Fashion",
    subCategory: "Jackets",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Navy"],
    bestseller: true,
    date: 1234567870000,
    rating: 4.7,
    reviews: 156,
  },
];

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  // Load product data
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        const foundProduct = MOCK_PRODUCTS.find((p) => p._id === productId);
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedSize(foundProduct.sizes[0]);
          setSelectedColor(foundProduct.colors[0]);
        }
        setLoading(false);
      }, 500);
    };

    if (productId) {
      loadProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className={styles.product}>
        <div className="container">
          <div className={styles.loadingState}>
            <div className={styles.loadingSkeleton}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonContent}>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonPrice}></div>
                <div className={styles.skeletonDescription}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.product}>
        <div className="container">
          <div className={styles.notFound}>
            <h2>Product not found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/products" className={styles.backButton}>
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    addItem({
      _id: product._id,
      name: product.name,
      image: product.image[0],
      price: product.price,
      originalPrice: product.oldPrice,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });

    openCart();
  };

  const handleImageChange = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? product.image.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === product.image.length - 1 ? 0 : prev + 1
      );
    }
  };

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p._id !== product._id && p.category === product.category
  ).slice(0, 4);

  return (
    <div className={styles.product}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`}>
            {product.category}
          </Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        {/* Product Content */}
        <div className={styles.productContent}>
          {/* Product Images */}
          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <img
                src={product.image[currentImageIndex]}
                alt={product.name}
                className={styles.mainImage}
              />

              {product.image.length > 1 && (
                <>
                  <button
                    onClick={() => handleImageChange("prev")}
                    className={`${styles.imageNav} ${styles.imagePrev}`}
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={() => handleImageChange("next")}
                    className={`${styles.imageNav} ${styles.imageNext}`}
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}

              {discountPercentage > 0 && (
                <div className={styles.discountBadge}>
                  -{discountPercentage}%
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.image.length > 1 && (
              <div className={styles.thumbnails}>
                {product.image.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`${styles.thumbnail} ${
                      index === currentImageIndex ? styles.active : ""
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className={styles.productInfo}>
            <div className={styles.productHeader}>
              <h1 className={styles.productTitle}>{product.name}</h1>

              {/* Rating */}
              <div className={styles.rating}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={
                        i < Math.floor(product.rating)
                          ? styles.starFilled
                          : styles.starEmpty
                      }
                    />
                  ))}
                </div>
                <span className={styles.ratingText}>
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>${product.price}</span>
                {product.oldPrice && (
                  <span className={styles.oldPrice}>${product.oldPrice}</span>
                )}
                {discountPercentage > 0 && (
                  <span className={styles.savings}>
                    Save ${product.oldPrice - product.price}
                  </span>
                )}
              </div>
            </div>

            {/* Product Options */}
            <div className={styles.productOptions}>
              {/* Size Selection */}
              <div className={styles.optionGroup}>
                <label className={styles.optionLabel}>
                  Size: <strong>{selectedSize}</strong>
                </label>
                <div className={styles.sizeOptions}>
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`${styles.sizeButton} ${
                        selectedSize === size ? styles.selected : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <Link to="/size-guide" className={styles.sizeGuide}>
                  Size Guide
                </Link>
              </div>

              {/* Color Selection */}
              <div className={styles.optionGroup}>
                <label className={styles.optionLabel}>
                  Color: <strong>{selectedColor}</strong>
                </label>
                <div className={styles.colorOptions}>
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`${styles.colorButton} ${
                        selectedColor === color ? styles.selected : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    >
                      <span className={styles.colorName}>{color}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className={styles.optionGroup}>
                <label className={styles.optionLabel}>Quantity:</label>
                <div className={styles.quantityControls}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={styles.quantityButton}
                    disabled={quantity <= 1}
                  >
                    <FiMinus />
                  </button>
                  <span className={styles.quantityValue}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={styles.quantityButton}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <button
                onClick={handleAddToCart}
                className={styles.addToCartButton}
              >
                <FiShoppingCart />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>

              <div className={styles.secondaryActions}>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`${styles.wishlistButton} ${
                    isWishlisted ? styles.wishlisted : ""
                  }`}
                >
                  <FiHeart />
                  {isWishlisted ? "Added to Wishlist" : "Add to Wishlist"}
                </button>

                <button className={styles.shareButton}>
                  <FiShare2 />
                  Share
                </button>
              </div>
            </div>

            {/* Features */}
            <div className={styles.features}>
              <div className={styles.feature}>
                <FiTruck />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className={styles.feature}>
                <FiRotateCcw />
                <span>30-day returns</span>
              </div>
              <div className={styles.feature}>
                <FiShield />
                <span>2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className={styles.productTabs}>
          <div className={styles.tabHeaders}>
            <button
              onClick={() => setActiveTab("description")}
              className={`${styles.tabHeader} ${
                activeTab === "description" ? styles.active : ""
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={`${styles.tabHeader} ${
                activeTab === "specifications" ? styles.active : ""
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`${styles.tabHeader} ${
                activeTab === "reviews" ? styles.active : ""
              }`}
            >
              Reviews ({product.reviews})
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "description" && (
              <div className={styles.description}>
                <p>{product.description}</p>
                {product.features && (
                  <div className={styles.featuresList}>
                    <h4>Key Features:</h4>
                    <ul>
                      {product.features.map(
                        (feature: string, index: number) => (
                          <li key={index}>{feature}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === "specifications" && (
              <div className={styles.specifications}>
                <div className={styles.specGrid}>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className={styles.specItem}>
                        <strong>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </strong>
                        <span>{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className={styles.reviews}>
                <div className={styles.reviewsSummary}>
                  <div className={styles.reviewsScore}>
                    <span className={styles.scoreNumber}>{product.rating}</span>
                    <div className={styles.scoreStars}>
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={
                            i < Math.floor(product.rating)
                              ? styles.starFilled
                              : styles.starEmpty
                          }
                        />
                      ))}
                    </div>
                    <span className={styles.reviewsCount}>
                      Based on {product.reviews} reviews
                    </span>
                  </div>
                </div>
                <div className={styles.reviewsPlaceholder}>
                  <FiInfo />
                  <p>Reviews feature coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className={styles.relatedProducts}>
            <h2>You might also like</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct._id}
                  product={{
                    _id: relatedProduct._id,
                    name: relatedProduct.name,
                    image: relatedProduct.image,
                    price: relatedProduct.price,
                    originalPrice: relatedProduct.oldPrice,
                    category: relatedProduct.category,
                    subCategory: relatedProduct.subCategory,
                    description: relatedProduct.description,
                    sizes: relatedProduct.sizes,
                    colors: relatedProduct.colors || ["Black", "White"],
                    rating: relatedProduct.rating || 4.0,
                    reviews: relatedProduct.reviews || 0,
                    bestSeller: relatedProduct.bestseller,
                    isNew: false,
                    isSale: !!relatedProduct.oldPrice,
                    date: new Date(relatedProduct.date).toISOString(),
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
