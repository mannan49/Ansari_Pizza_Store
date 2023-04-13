import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import CartPage from "./Components/CartPage";
import Home from "./Components/Home";
import SeparateProduct from "./Components/SeparateProduct";
import ProductsPage from "./Components/ProductsPage";
import { CartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Footer from "./Components/Footer";
function App() {
  const { cart: cartItems, clearCart } = useContext(CartContext);

  // Detect page refresh and clear the cart
  useEffect(() => {
    window.addEventListener("beforeunload", clearCart);
    return () => {
      window.removeEventListener("beforeunload", clearCart);
    };
  }, [clearCart]);
  const [cart,setCart] = useState({});
  useEffect(()=>{
    const cart = window.localStorage.getItem('cart')
    setCart(JSON.parse(cart))
  },[])

  useEffect(()=>{
    window.localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  return (
    <Router basename="/ansari_pizza_store">
      <CartContext.Provider value={{ cart, setCart}}>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/products/:_id" element={<SeparateProduct />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
