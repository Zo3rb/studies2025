import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { FiGrid, FiList, FiFilter, FiX } from "react-icons/fi";
import { useDebounce } from "use-debounce";
import ProductCard from "../components/ProductCard";
import styles from "../styles/pages/Collection.module.scss";

// Types
interface Product {
  _id: string;
  name: string;
  image: string[];
  price: number;
  oldPrice?: number;
  description: string;
  category: string;
  subCategory: string;
  sizes: string[];
  bestseller: boolean;
  date: number;
}

interface FilterState {
  categories: string[];
  subCategories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  rating: number;
}

interface SortOption {
  value: string;
  label: string;
}

// Mock Products Data
const MOCK_PRODUCTS: Product[] = [
  {
    _id: "1",
    name: "Premium Cotton Henley",
    image: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400",
      "https://images.unsplash.com/photo-1583743814966-8936f37f8052?w=400",
    ],
    price: 89,
    oldPrice: 120,
    description: "Comfortable premium cotton henley with a modern fit",
    category: "Men's Fashion",
    subCategory: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    bestseller: true,
    date: 1234567890000,
  },
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
    bestseller: false,
    date: 1234567880000,
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
    bestseller: true,
    date: 1234567870000,
  },
  {
    _id: "4",
    name: "Elegant Floral Dress",
    image: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
    ],
    price: 149,
    description: "Beautiful floral dress perfect for special occasions",
    category: "Women's Fashion",
    subCategory: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    bestseller: false,
    date: 1234567860000,
  },
  {
    _id: "5",
    name: "Premium Jeans",
    image: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400",
    ],
    price: 179,
    oldPrice: 220,
    description: "High-quality denim jeans with perfect fit",
    category: "Men's Fashion",
    subCategory: "Jeans",
    sizes: ["S", "M", "L", "XL", "XXL"],
    bestseller: true,
    date: 1234567850000,
  },
  {
    _id: "6",
    name: "Cozy Wool Sweater",
    image: [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc6ce2e?w=400",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    ],
    price: 139,
    description: "Warm and comfortable wool sweater for winter",
    category: "Women's Fashion",
    subCategory: "Sweaters",
    sizes: ["XS", "S", "M", "L"],
    bestseller: false,
    date: 1234567840000,
  },
  {
    _id: "7",
    name: "Luxury Leather Handbag",
    image: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
    ],
    price: 299,
    oldPrice: 399,
    description: "Premium leather handbag with elegant design",
    category: "Accessories",
    subCategory: "Bags",
    sizes: ["One Size"],
    bestseller: true,
    date: 1234567830000,
  },
  {
    _id: "8",
    name: "Designer Hoodie",
    image: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    ],
    price: 109,
    description: "Comfortable designer hoodie with modern style",
    category: "Men's Fashion",
    subCategory: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    bestseller: false,
    date: 1234567820000,
  },
];

const SORT_OPTIONS: SortOption[] = [
  { value: "relevant", label: "Sort by Relevant" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "New to Oldest" },
  { value: "oldest", label: "Oldest to New" },
];

const Collection = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortBy, setSortBy] = useState("relevant");

  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    subCategories: [],
    priceRange: [0, 1000],
    sizes: [],
    colors: [],
    rating: 0,
  });

  // Available filter options
  const availableFilters = {
    categories: [
      "Men's Fashion",
      "Women's Fashion",
      "Kids",
      "Accessories",
      "Shoes",
      "Bags",
    ],
    subCategories: [
      "T-Shirts",
      "Shirts",
      "Jackets",
      "Jeans",
      "Dresses",
      "Hoodies",
      "Sweaters",
      "Pants",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray", "Red", "Blue", "Green", "Brown"],
  };

  // Get search term from URL and debounce it
  const searchTerm = searchParams.get("search") || "";
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  // Load products when dependencies change
  useEffect(() => {
    loadProducts();
  }, [debouncedSearchTerm, filters, sortBy, currentPage]);

  const loadProducts = async () => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      let filteredProducts = [...MOCK_PRODUCTS];

      // Apply search filter
      if (debouncedSearchTerm) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase()) ||
            product.category
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase()) ||
            product.subCategory
              .toLowerCase()
              .includes(debouncedSearchTerm.toLowerCase())
        );
      }

      // Apply category filters
      if (filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.categories.includes(product.category)
        );
      }

      // Apply subcategory filters
      if (filters.subCategories.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.subCategories.includes(product.subCategory)
        );
      }

      // Apply price range filter
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );

      // Apply size filters
      if (filters.sizes.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.sizes.some((size) => filters.sizes.includes(size))
        );
      }

      // Apply sorting
      switch (sortBy) {
        case "price-low":
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          filteredProducts.sort((a, b) => b.date - a.date);
          break;
        case "oldest":
          filteredProducts.sort((a, b) => a.date - b.date);
          break;
        default:
          // Relevant - show bestsellers first
          filteredProducts.sort((a, b) => {
            if (a.bestseller && !b.bestseller) return -1;
            if (!a.bestseller && b.bestseller) return 1;
            return 0;
          });
      }

      // Pagination simulation
      const itemsPerPage = 8;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedProducts = filteredProducts.slice(
        startIndex,
        startIndex + itemsPerPage
      );

      setProducts(paginatedProducts);
      setTotalProducts(filteredProducts.length);
      setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
      setLoading(false);
    }, 800);
  };

  const handleFilterChange = (filterType: keyof FilterState, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    setCurrentPage(1); // Reset to first page
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      subCategories: [],
      priceRange: [0, 1000],
      sizes: [],
      colors: [],
      rating: 0,
    });
  };

  const toggleFilter = (filterType: keyof FilterState, value: string) => {
    if (
      filterType === "categories" ||
      filterType === "subCategories" ||
      filterType === "sizes" ||
      filterType === "colors"
    ) {
      const currentValues = filters[filterType] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      handleFilterChange(filterType, newValues);
    }
  };

  const getActiveFiltersCount = () => {
    return (
      filters.categories.length +
      filters.subCategories.length +
      filters.sizes.length +
      filters.colors.length +
      (filters.priceRange[1] < 1000 ? 1 : 0)
    );
  };

  return (
    <div className={styles.collection}>
      <div className="container">
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <div className={styles.headerLeft}>
            <h1>All Collection</h1>
            {searchTerm && (
              <p className={styles.searchInfo}>
                Search results for: "<strong>{searchTerm}</strong>"
              </p>
            )}
            <div className={styles.headerLine}></div>
          </div>

          <div className={styles.headerRight}>
            {/* View Toggle */}
            <div className={styles.viewToggle}>
              <button
                className={`${styles.viewButton} ${
                  viewMode === "grid" ? styles.active : ""
                }`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
              >
                <FiGrid />
              </button>
              <button
                className={`${styles.viewButton} ${
                  viewMode === "list" ? styles.active : ""
                }`}
                onClick={() => setViewMode("list")}
                title="List View"
              >
                <FiList />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className={styles.sortContainer}>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className={styles.sortSelect}
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className={styles.resultsInfo}>
          <p>
            {loading ? "Loading..." : `Showing ${totalProducts} products`}
            {getActiveFiltersCount() > 0 && (
              <span className={styles.filterCount}>
                ({getActiveFiltersCount()} filter
                {getActiveFiltersCount() > 1 ? "s" : ""} applied)
              </span>
            )}
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Filters Sidebar */}
          <aside
            className={`${styles.sidebar} ${
              showFilters ? styles.sidebarOpen : ""
            }`}
          >
            <div className={styles.filtersHeader}>
              <h3>
                Filters
                {getActiveFiltersCount() > 0 && (
                  <span className={styles.filterBadge}>
                    {getActiveFiltersCount()}
                  </span>
                )}
              </h3>
              <div className={styles.filterActions}>
                <button onClick={clearFilters} className={styles.clearButton}>
                  Clear All
                </button>
                <button
                  className={styles.closeSidebar}
                  onClick={() => setShowFilters(false)}
                >
                  <FiX />
                </button>
              </div>
            </div>

            {/* Categories Filter */}
            <div className={styles.filterGroup}>
              <h4>Categories</h4>
              <div className={styles.checkboxGroup}>
                {availableFilters.categories.map((category) => (
                  <label key={category} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => toggleFilter("categories", category)}
                    />
                    <span className={styles.checkmark}></span>
                    <span className={styles.labelText}>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sub Categories Filter */}
            <div className={styles.filterGroup}>
              <h4>Type</h4>
              <div className={styles.checkboxGroup}>
                {availableFilters.subCategories.map((subCategory) => (
                  <label key={subCategory} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={filters.subCategories.includes(subCategory)}
                      onChange={() =>
                        toggleFilter("subCategories", subCategory)
                      }
                    />
                    <span className={styles.checkmark}></span>
                    <span className={styles.labelText}>{subCategory}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className={styles.filterGroup}>
              <h4>Price Range</h4>
              <div className={styles.priceRange}>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handleFilterChange("priceRange", [
                      0,
                      Number(e.target.value),
                    ])
                  }
                  className={styles.priceSlider}
                />
                <div className={styles.priceValues}>
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Sizes Filter */}
            <div className={styles.filterGroup}>
              <h4>Sizes</h4>
              <div className={styles.sizeGroup}>
                {availableFilters.sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${
                      filters.sizes.includes(size) ? styles.selected : ""
                    }`}
                    onClick={() => toggleFilter("sizes", size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors Filter */}
            <div className={styles.filterGroup}>
              <h4>Colors</h4>
              <div className={styles.colorGroup}>
                {availableFilters.colors.map((color) => (
                  <button
                    key={color}
                    className={`${styles.colorButton} ${
                      filters.colors.includes(color) ? styles.selected : ""
                    }`}
                    onClick={() => toggleFilter("colors", color)}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  >
                    <span className={styles.colorName}>{color}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className={styles.main}>
            {/* Mobile Filter Toggle */}
            <button
              className={styles.mobileFilterToggle}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter />
              Filters
              {getActiveFiltersCount() > 0 && (
                <span className={styles.mobileFilterBadge}>
                  {getActiveFiltersCount()}
                </span>
              )}
            </button>

            {/* Products Grid/List */}
            {loading ? (
              <div className={styles.loading}>
                <div
                  className={`${styles.productGrid} ${
                    viewMode === "list" ? styles.listView : ""
                  }`}
                >
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={styles.productSkeleton}>
                      <div className={styles.skeletonImage}></div>
                      <div className={styles.skeletonContent}>
                        <div className={styles.skeletonTitle}></div>
                        <div className={styles.skeletonPrice}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : products.length > 0 ? (
              <div
                className={`${styles.productGrid} ${
                  viewMode === "list" ? styles.listView : ""
                }`}
              >
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={{
                      _id: product._id,
                      name: product.name,
                      image: product.image,
                      price: product.price,
                      originalPrice: product.oldPrice,
                      category: product.category,
                      subCategory: product.subCategory,
                      description: product.description,
                      sizes: product.sizes,
                      colors: ["black", "white", "navy"], // Add default colors since Collection doesn't have this field
                      rating: 4.0, // Add default rating
                      reviews: 0, // Add default reviews
                      bestSeller: product.bestseller,
                      isNew: false,
                      isSale: !!product.oldPrice,
                      date: new Date(product.date).toISOString(),
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noProducts}>
                <div className={styles.noProductsIcon}>
                  <FiFilter />
                </div>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className={styles.clearFiltersButton}
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {!loading && totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={styles.paginationButton}
                >
                  Previous
                </button>

                <div className={styles.paginationNumbers}>
                  {[...Array(Math.min(totalPages, 7))].map((_, i) => {
                    let pageNumber;
                    if (totalPages <= 7) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 4) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 3) {
                      pageNumber = totalPages - 6 + i;
                    } else {
                      pageNumber = currentPage - 3 + i;
                    }

                    return (
                      <button
                        key={pageNumber}
                        className={`${styles.paginationNumber} ${
                          currentPage === pageNumber ? styles.active : ""
                        }`}
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={styles.paginationButton}
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Filter Overlay for Mobile */}
        {showFilters && (
          <div
            className={styles.filterOverlay}
            onClick={() => setShowFilters(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Collection;
