import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./context/ThemeContext";
// Remove CartProvider import from here since it's now in main.tsx
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import FAQ from "./pages/FAQ";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import SizeGuide from "./pages/SizeGuide";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        {/* Remove CartProvider from here */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Collection />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="returns" element={<Returns />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="size-guide" element={<SizeGuide />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<Orders />} />
          <Route path="place-order" element={<PlaceOrder />} />
          <Route path="products/:productId" element={<Product />} />
        </Routes>
      </Layout>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="custom-toast"
        className="custom-toast-body"
        progressClassName="custom-toast-progress"
      />
    </ThemeProvider>
  );
};

export default App;
