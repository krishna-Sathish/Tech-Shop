import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { dropdownMenu } from '../data/headerData';
import commonContext from "../common/CommonContext";
import cartContext from "../contexts/cart/cartContext";
import AccountForm from "../form/AccountForm";
import SearchBar from "./SearchBar";

const Header = () => {
  const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
  const { cartItems } = useContext(cartContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle sticky-header
  useEffect(() => {
    const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener("scroll", handleIsSticky);
    return () => window.removeEventListener("scroll", handleIsSticky);
  }, [isSticky]);

  const cartQuantity = cartItems.length;

  return (
    <>
      <header>
        <div className="container-fluid d-flex justify-content-between mt-3">
          <div>
            <h2 className="navbar-brand">
              <Link to="/" className="text-decoration-none text-light fs-5 fw-bold">Tech-Shop</Link>
            </h2>
          </div>
          <nav className="d-flex ">
            <div>
              <span onClick={() => toggleSearch(true)} title="search" className="text-light mx-3 fs-5 ">
                <AiOutlineSearch className=" cursor" />
              </span>
            </div>

            <div>
              <Link to="/cart">
                <AiOutlineShoppingCart title="Cart"  className="text-light mx-3 fs-5 position-relative "/>
                {cartQuantity > 0 && <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger">{cartQuantity}</span>}
              </Link>
            </div>

            <div 
              className="user_action"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <span>
                <AiOutlineUser  className="text-light mx-3 fs-5 cursor" />
              </span>
              {isDropdownVisible && (
  <div className="dropdown_menu border rounded">
    <h4 className="text-secondary ms-3 mt-3">
      Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}
    </h4>
    <p className="text-secondary m-2">Access account and manage orders</p>
    {!formUserInfo && (
      <button
        type="button"
        className="btn border text-light m-2"
        onClick={() => {
          toggleForm(true);
          setIsDropdownVisible(false); 
        }}
      >
        Login / Signup
      </button>
    )}
    <div className="separator"></div>
    <ul>
      {dropdownMenu.map((item) => {
        const { id, link, path } = item;
        return (
          <li key={id}>
            <Link to={path} className="text-decoration-none text-secondary">{link}</Link>
          </li>
        );
      })}
    </ul>
  </div>
)}

              
            </div>
          </nav>
        </div>
      </header>

      <SearchBar />
      <AccountForm />
    </>
  );
};

export default Header;
