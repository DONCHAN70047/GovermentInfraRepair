import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getAllProducts } from "../../products";
import "./Header.css";

const TopHeader = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelector(".top-header")
        ?.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length >= 1) {
      const allProducts = getAllProducts();

      const filtered = allProducts.filter((product) =>
        product.name?.toLowerCase().includes(query.toLowerCase())
      );

      const uniqueProducts = filtered.filter(
        (item, index, self) =>
          index === self.findIndex(
            (p) => p.name === item.name && p.weight === item.weight
          )
      );

      setSearchResults(uniqueProducts.slice(0, 6));
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/products/${product.categorySlug}?highlight=${product.id}`);
    setSearchQuery("");
    setShowResults(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="top-header">
      <div className="top-left">
        <img src="/logo.jpg" alt="Logo" className="logo" />
      </div>

 
      <div className="top-center" ref={searchRef}>
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products"
        />

        {showResults && (
          <div className="search-dropdown">
            <div className="search-title">
              Suggested Products : <b>{searchQuery}</b>
            </div>

            {searchResults.map((product, index) => (
              <div
                key={index}
                className="search-row"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="search-img"
                />
                <div className="search-info">
                  <p>{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="top-right">
        <FaShoppingBag />
        <span className="cart-badge">{totalItems}</span>
        <FaUser />
        <span className="user-text">Hello, User</span>
      </div>
    </div>
  );
};

export default TopHeader;
