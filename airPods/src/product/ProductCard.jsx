import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useActive from '../hookes/useActive';
import cartContext from '../contexts/cart/cartContext';
import '../stylesCSS/ProductCard.css'
const ProductCard = (props) => {
  const { id, images, title, info, finalPrice, originalPrice, rateCount, path } = props;
  const { addItem } = useContext(cartContext);
  const { active, handleActive, activeClass } = useActive(false);

  // Handling Add-to-cart
  const handleAddItem = () => {
    const item = { ...props };
    addItem(item);
    handleActive(id);
    setTimeout(() => {
      handleActive(false);
    }, 3000);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-4">
      <div className="card bg-black border h-100 p-3">
      <figure className="mb-3">
  <Link to={`/product-details/${id}`}>
    <img src={images[0]} className="card-img-top rounded img-fluid" alt="product-img" />
  </Link>
</figure>

        <div className="card-body d-flex flex-column">
          <div className="text-danger mb-2">
            {[...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)}
          </div>
          <h3 className="card-title mb-2">
            <Link className="text-decoration-none text-light fs-5 fw-bold" to={`${path}${id}`}>{title}</Link>
          </h3>
          <p className="card-text text-secondary product_title mb-3">{info}</p>
          <div className="border-bottom text-secondary mb-3"></div>
          <h2 className="text-light fs-5 mb-3">
            ${finalPrice} &nbsp;
            <small><del className="text-danger">${originalPrice}</del></small>
          </h2>
          <button
            type="button"
            className={`btn ${activeClass(id)} ${active ? 'btn-success' : 'btn-danger'}`}
            onClick={handleAddItem}
          >
            {active ? 'Added' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
