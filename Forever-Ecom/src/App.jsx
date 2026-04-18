import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Collection,
  About,
  Contact,
  Product,
  Cart,
  Login,
  PlaceOrder,
  Orders,
} from "./pages";
import { Footer, Navbar, SearchBar } from "./components";

import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:x-[9vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
