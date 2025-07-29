import { useEffect } from "react";
import { FiX, FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router";
import { useCart } from "../../context/CartContext";
import styles from "./CartSidebar.module.scss";

const CartSidebar = () => {
  const {
    items,
    totalItems,
    totalAmount,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close cart on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCart();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      clearCart();
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const calculateSavings = () => {
    return items.reduce((savings, item) => {
      if (item.originalPrice) {
        return savings + (item.originalPrice - item.price) * item.quantity;
      }
      return savings;
    }, 0);
  };

  const savings = calculateSavings();

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={closeCart} />

      {/* Sidebar */}
      <div className={styles.sidebar}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h3>
              <FiShoppingBag />
              Shopping Cart
              {totalItems > 0 && (
                <span className={styles.itemCount}>({totalItems})</span>
              )}
            </h3>
            {items.length > 0 && (
              <button
                onClick={handleClearCart}
                className={styles.clearButton}
                title="Clear Cart"
              >
                Clear All
              </button>
            )}
          </div>
          <button onClick={closeCart} className={styles.closeButton}>
            <FiX size={24} />
          </button>
        </div>

        {/* Cart Content */}
        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyIcon}>
                <FiShoppingBag size={64} />
              </div>
              <h4>Your cart is empty</h4>
              <p>
                Discover our amazing collection and add your favorite items!
              </p>
              <Link
                to="/products"
                className={styles.shopButton}
                onClick={closeCart}
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className={styles.items}>
                {items.map((item) => (
                  <div
                    key={`${item._id}-${item.size}-${item.color}`}
                    className={styles.item}
                  >
                    <div className={styles.itemImage}>
                      <img src={item.image} alt={item.name} loading="lazy" />
                      {item.originalPrice && (
                        <div className={styles.saleTag}>Sale</div>
                      )}
                    </div>

                    <div className={styles.itemDetails}>
                      <div className={styles.itemHeader}>
                        <h5 className={styles.itemName}>{item.name}</h5>
                        <button
                          onClick={() =>
                            removeItem(item._id, item.size, item.color)
                          }
                          className={styles.removeButton}
                          title="Remove item"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>

                      <div className={styles.itemVariants}>
                        <span className={styles.variant}>
                          <strong>Size:</strong> {item.size}
                        </span>
                        <span className={styles.variant}>
                          <strong>Color:</strong> {item.color}
                        </span>
                      </div>

                      <div className={styles.itemPrice}>
                        <span className={styles.price}>
                          {formatPrice(item.price)}
                        </span>
                        {item.originalPrice && (
                          <span className={styles.originalPrice}>
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                      </div>

                      <div className={styles.itemActions}>
                        <div className={styles.quantityControls}>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item._id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            disabled={item.quantity <= 1}
                            className={styles.quantityButton}
                            title="Decrease quantity"
                          >
                            <FiMinus size={14} />
                          </button>
                          <span className={styles.quantity}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item._id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className={styles.quantityButton}
                            title="Increase quantity"
                          >
                            <FiPlus size={14} />
                          </button>
                        </div>

                        <div className={styles.itemTotal}>
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className={styles.footer}>
                {savings > 0 && (
                  <div className={styles.savings}>
                    <span className={styles.savingsText}>
                      You're saving {formatPrice(savings)}!
                    </span>
                  </div>
                )}

                <div className={styles.summary}>
                  <div className={styles.summaryRow}>
                    <span>
                      Subtotal ({totalItems} item{totalItems > 1 ? "s" : ""}):
                    </span>
                    <span className={styles.subtotalAmount}>
                      {formatPrice(totalAmount)}
                    </span>
                  </div>
                  <p className={styles.taxNote}>
                    Shipping and taxes calculated at checkout
                  </p>
                </div>

                <div className={styles.actions}>
                  <Link
                    to="/cart"
                    className={styles.viewCartButton}
                    onClick={closeCart}
                  >
                    View Full Cart
                  </Link>
                  <button className={styles.checkoutButton}>
                    Proceed to Checkout
                  </button>
                </div>

                <div className={styles.continueShopping}>
                  <Link
                    to="/products"
                    className={styles.continueShoppingLink}
                    onClick={closeCart}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
