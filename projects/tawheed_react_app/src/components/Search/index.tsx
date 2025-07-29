import { useState, useRef, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useDebounce } from "use-debounce";
import styles from "./Search.module.scss";

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const Search = ({ isOpen, onClose }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Debounce search term to avoid too many API calls
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Reset search when closing
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setSuggestions([]);
      setIsLoading(false);
    }
  }, [isOpen]);

  // Handle search suggestions (mock for now)
  useEffect(() => {
    if (debouncedSearchTerm.length > 2) {
      setIsLoading(true);

      // Mock API call - replace with real API later
      setTimeout(() => {
        const mockSuggestions = [
          "Premium Cotton Henley",
          "Classic Denim Shirt",
          "Urban Casual Jacket",
          "Premium Jeans",
          "Cotton T-Shirt",
          "Casual Blazer",
          "Designer Hoodie",
          "Vintage Denim",
          "Slim Fit Pants",
          "Wool Sweater",
        ].filter((item) =>
          item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );

        setSuggestions(mockSuggestions.slice(0, 6)); // Limit to 6 suggestions
        setIsLoading(false);
      }, 300);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  }, [debouncedSearchTerm]);

  const handleSearch = (term: string = searchTerm) => {
    if (term.trim()) {
      navigate(`/products?search=${encodeURIComponent(term.trim())}`);
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    } else if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
  };

  const handleClose = () => {
    setSearchTerm("");
    setSuggestions([]);
    setIsLoading(false);
    onClose();
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
    setSuggestions([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.searchOverlay} onClick={handleClose}>
      <div
        className={styles.searchContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className={styles.searchHeader}>
          <h2>Search Products</h2>
          <button
            onClick={handleClose}
            className={styles.closeButton}
            aria-label="Close search"
          >
            <FiX />
          </button>
        </div>

        {/* Search Input */}
        <div className={styles.searchInputContainer}>
          <FiSearch className={styles.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for products, brands, categories..."
            className={styles.searchInput}
            autoComplete="off"
          />
          {searchTerm && (
            <button
              onClick={clearSearchTerm}
              className={styles.clearButton}
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <span>Searching...</span>
          </div>
        )}

        {/* Search Suggestions */}
        {suggestions.length > 0 && !isLoading && (
          <div className={styles.suggestions}>
            <h3>Suggestions</h3>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={styles.suggestionItem}
                >
                  <FiSearch className={styles.suggestionIcon} />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* No Results */}
        {debouncedSearchTerm.length > 2 &&
          suggestions.length === 0 &&
          !isLoading && (
            <div className={styles.noResults}>
              <p>No suggestions found for "{debouncedSearchTerm}"</p>
              <small>
                Try searching for something else or check your spelling
              </small>
            </div>
          )}

        {/* Search Footer */}
        <div className={styles.searchFooter}>
          <button
            onClick={() => handleSearch()}
            disabled={!searchTerm.trim()}
            className={styles.searchButton}
          >
            <FiSearch />
            Search Products
          </button>

          {/* Popular Searches */}
          <div className={styles.popularSearches}>
            <span className={styles.popularLabel}>Popular:</span>
            <div className={styles.popularTags}>
              {["Jeans", "T-Shirts", "Jackets", "Sneakers"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSearch(tag)}
                  className={styles.popularTag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
