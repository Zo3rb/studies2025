import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import SaleProducts from "../components/SaleProducts";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <NewProducts />
      <SaleProducts />
    </div>
  );
};

export default Home;
