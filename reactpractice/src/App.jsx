import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import PromotionalService from "./PromotionBar.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";

function App() {
  return (
    <Router>
      <>
        <PromotionalService />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
        </Routes>
        <Routes>
          <Route path="/product-detail" element={<ProductDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
