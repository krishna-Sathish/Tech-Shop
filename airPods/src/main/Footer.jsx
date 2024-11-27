import React, { useState } from "react";
import { Link } from "react-router-dom";
import { footMenu, footSocial } from "../data/footerData";
import '../App.css';

const Footer = () => {
  const [subValue, setSubValue] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue("");
    alert("Thank you, you are subscribed to receive our daily newsletter");
  };

  const currYear = new Date().getFullYear();

  return (
    <footer className="footer-item py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          
          <div className="my-4 col-12 col-sm-6 col-md-3">
            <h2>
              <Link to="/" className="text-light text-decoration-none">Tech-Shop</Link>
            </h2>
            <p className="text-secondary">
              Subscribe to our Email alerts to receive early discount offers and new product info.
            </p>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center align-items-md-start">
              <input
                type="email"
                className="form-control footer-email mb-2"
                placeholder="Email Address*"
                required
                value={subValue}
                onChange={(e) => setSubValue(e.target.value)}
              />
              <button type="submit" className="btn btn-danger">
                Subscribe
              </button>
            </form>
          </div>

          {footMenu.map((item) => {
            const { id, title, menu } = item;
            return (
              <div className="my-4 col-12 col-sm-6 col-md-3" key={id}>
                <h4 className="text-light">{title}</h4>
                <ul className="list-unstyled">
                  {menu.map((subItem) => {
                    const { id, link} = subItem;
                    return (
                      <li key={id} className="mt-2 text-secondary">
                        {link}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <hr className="text-light my-4" />

        {/* Copyright and Social Links */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <p className="text-secondary mb-2 mb-md-0">
            © {currYear} | All Rights Reserved. Built by <strong className="text-light">SATHISH</strong>
          </p>
          <div className="d-flex justify-content-center">
            {footSocial.map((item) => {
              const { id, icon, path } = item;
              return (
                <Link className="mx-2 text-secondary fw-bold fs-5" to={path} key={id}>
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
