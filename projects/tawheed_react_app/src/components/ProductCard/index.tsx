import { Link } from "react-router";
import {
  FiStar,
  FiHeart,
  FiEye,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import styles from "./ProductCard.module.scss";

export interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string | string[]; // Support both single image and array
  category: string;
  subCategory: string;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  bestSeller: boolean;
  isNew: boolean;
  isSale: boolean;
  date: string;
}

interface ProductCardProps {
  product: Product;
  showQuickActions?: boolean;
  showImageNavigation?: boolean;
  showColorSelection?: boolean;
  className?: string;
}

// Color mapping for better visual representation
const colorMap: Record<string, string> = {
  // Basic colors
  black: "#000000",
  white: "#FFFFFF",
  gray: "#6B7280",
  grey: "#6B7280",
  red: "#EF4444",
  blue: "#3B82F6",
  green: "#10B981",
  yellow: "#F59E0B",
  pink: "#EC4899",
  purple: "#8B5CF6",
  orange: "#F97316",
  brown: "#A3522F",
  navy: "#1E40AF",
  burgundy: "#7C2D12",
  olive: "#65A30D",
  khaki: "#BEF264",
  tan: "#D2B48C",
  beige: "#F5F5DC",
  charcoal: "#374151",
  silver: "#C0C0C0",
  gold: "#FFD700",
  // Specific fashion colors
  "light-blue": "#7DD3FC",
  "dark-blue": "#1E3A8A",
  "floral-blue": "#DBEAFE",
  "floral-pink": "#FCE7F3",
  emerald: "#059669",
};

const ProductCard = ({
  product,
  showQuickActions = true,
  showImageNavigation = false,
  showColorSelection = false,
  className = "",
}: ProductCardProps) => {
  // Convert image to array format
  const images = Array.isArray(product.image) ? product.image : [product.image];

  // State management
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Calculate discount percentage
  const discount =
    product.originalPrice && product.price < product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

  // Get current image
  const currentImage = images[currentImageIndex] || images[0];

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setImageLoading(true);
    setImageError(false);
  }, [product._id]);

  // Image handlers
  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  // Navigation handlers
  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Color selection handler
  const handleColorSelect = (color: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColor(color === selectedColor ? null : color);
  };

  // Wishlist handler
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsInWishlist(!isInWishlist);
    // TODO: Implement wishlist API call
    console.log(
      `${isInWishlist ? "Removed from" : "Added to"} wishlist:`,
      product.name
    );
  };

  // Quick view handler
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement quick view modal
    console.log("Quick view:", product.name);
  };

  // Get color value for display
  const getColorValue = (colorName: string): string => {
    const normalizedColor = colorName.toLowerCase().replace(/[^a-z-]/g, "");
    return colorMap[normalizedColor] || colorName;
  };

  return (
    <div
      className={`${styles.productCard} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product._id}`} className={styles.productLink}>
        {/* Product Image Container */}
        <div className={styles.imageContainer}>
          {/* Loading Skeleton */}
          {imageLoading && !imageError && (
            <div className={styles.imageSkeleton}>
              <div className={styles.skeletonShimmer}></div>
            </div>
          )}

          {/* Error State */}
          {imageError && (
            <div className={styles.imageError}>
              <div className={styles.errorIcon}>📷</div>
              <span className={styles.errorText}>Image not available</span>
            </div>
          )}

          {/* Product Image */}
          {!imageError && (
            <>
              <img
                src={currentImage}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className={`${styles.productImage} ${
                  !imageLoading ? styles.loaded : ""
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />

              {/* Image Navigation */}
              {showImageNavigation && images.length > 1 && isHovered && (
                <div className={styles.imageNavigation}>
                  <button
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              )}

              {/* Image Indicators */}
              {images.length > 1 && (
                <div className={styles.imageIndicators}>
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.indicator} ${
                        index === currentImageIndex ? styles.active : ""
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Badges */}
          <div className={styles.badges}>
            {product.isNew && (
              <span className={`${styles.badge} ${styles.newBadge}`}>NEW</span>
            )}
            {product.isSale && discount > 0 && (
              <span className={`${styles.badge} ${styles.saleBadge}`}>
                -{discount}%
              </span>
            )}
            {product.bestSeller && (
              <span className={`${styles.badge} ${styles.bestSellerBadge}`}>
                BEST SELLER
              </span>
            )}
          </div>

          {/* Quick Actions */}
          {showQuickActions && (
            <div
              className={`${styles.quickActions} ${
                isHovered ? styles.visible : ""
              }`}
            >
              <button
                className={`${styles.actionButton} ${
                  isInWishlist ? styles.active : ""
                }`}
                aria-label={
                  isInWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
                onClick={handleWishlist}
              >
                <FiHeart className={isInWishlist ? styles.filled : ""} />
              </button>
              <button
                className={styles.actionButton}
                aria-label="Quick view"
                onClick={handleQuickView}
              >
                <FiEye />
              </button>
            </div>
          )}

          {/* Hover Overlay */}
          <div
            className={`${styles.hoverOverlay} ${
              isHovered ? styles.visible : ""
            }`}
          >
            <span className={styles.viewProduct}>View Product</span>
            {images.length > 1 && (
              <span className={styles.imageCount}>{images.length} photos</span>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          {/* Category */}
          <div className={styles.category}>
            {product.category}
            {product.subCategory && (
              <span className={styles.subCategory}>
                • {product.subCategory}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className={styles.productName}>{product.name}</h3>

          {/* Rating */}
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, index) => {
                const isFilled = index < Math.floor(product.rating);
                const isHalf =
                  index === Math.floor(product.rating) &&
                  product.rating % 1 !== 0;

                return (
                  <div key={index} className={styles.starContainer}>
                    <FiStar
                      className={`${styles.star} ${
                        isFilled ? styles.filled : ""
                      }`}
                    />
                    {isHalf && (
                      <FiStar
                        className={`${styles.star} ${styles.half}`}
                        style={{ clipPath: "inset(0 50% 0 0)" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <span className={styles.reviewCount}>
              ({product.reviews.toLocaleString()})
            </span>
            <span className={styles.ratingValue}>
              {product.rating.toFixed(1)}
            </span>
          </div>

          {/* Price */}
          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <>
                <span className={styles.originalPrice}>
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className={styles.savings}>
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </>
            )}
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className={styles.colorsSection}>
              {!showColorSelection && (
                <div className={styles.colors}>
                  {product.colors.slice(0, 4).map((color, index) => (
                    <div
                      key={index}
                      className={styles.colorDot}
                      style={{ backgroundColor: getColorValue(color) }}
                      title={color}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className={styles.moreColors}>
                      +{product.colors.length - 4}
                    </span>
                  )}
                </div>
              )}

              {showColorSelection && (
                <div className={styles.colorSelection}>
                  <div className={styles.colorLabel}>Colors:</div>
                  <div className={styles.selectableColors}>
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`${styles.selectableColorDot} ${
                          selectedColor === color ? styles.selected : ""
                        }`}
                        style={{ backgroundColor: getColorValue(color) }}
                        title={color}
                        onClick={(e) => handleColorSelect(color, e)}
                        aria-label={`Select ${color} color`}
                      >
                        {selectedColor === color && (
                          <div className={styles.selectedIndicator}>✓</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sizes Preview */}
          {product.sizes && product.sizes.length > 0 && (
            <div className={styles.sizesPreview}>
              <span className={styles.sizesLabel}>Sizes:</span>
              <span className={styles.sizesText}>
                {product.sizes.length > 3
                  ? `${product.sizes.slice(0, 3).join(", ")} +${
                      product.sizes.length - 3
                    } more`
                  : product.sizes.join(", ")}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
