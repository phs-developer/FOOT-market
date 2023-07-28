import "./App.css";
import { Main } from "./pages/main/Main";
import { Cart } from "./pages/cart/cart";
import { Search } from "./pages/search/Search";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CategoryPage } from "./pages/category/category";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    (async function () {
      const response = await fetch("product.json");
      const result = await response.json();
      setData(result);
    })();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main data={data} />} />
        <Route
          path="all"
          element={<CategoryPage data={data} category="all" />}
        />
        <Route
          path="man"
          element={<CategoryPage data={data} category="man" />}
        />
        <Route
          path="woman"
          element={<CategoryPage data={data} category="woman" />}
        />
        <Route path="/search" element={<Search data={data} />} />
        <Route path="/cart" element={<Cart data={data} />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

//ScrollToTop
function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="top-btn" onClick={scrollToTop}>
      <p>TOP</p>
      <FontAwesomeIcon className="top-moved" icon={faPlane} />
    </div>
  );
}
