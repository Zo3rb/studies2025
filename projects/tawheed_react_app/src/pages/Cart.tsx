import styles from "../styles/pages/Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <section className="section">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>Your cart is currently empty</p>
        </div>
      </section>
    </div>
  );
};

export default Cart;
