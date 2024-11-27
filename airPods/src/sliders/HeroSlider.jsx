import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../stylesCSS/HeroSlider.css';  
import { displayMoney } from '../calculateMoney/Money';
import productsData from '../data/productsData';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const heroProducts = productsData.filter(item => item.tag === 'hero-product');

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="hero-slider my-4">  
      <Slider {...settings}>
        {heroProducts.map((item) => {
          const { id, title, tagline, heroImage, finalPrice, originalPrice } = item;
          const newPrice = displayMoney(finalPrice);
          const oldPrice = displayMoney(originalPrice);

          return ( 
            <div key={id} className="slider-item">
            <div className="container-fluid">
              <div className="row my-4 d-flex flex-column-reverse flex-md-row">
                <div className="col-12 col-md-6 hero_text">
                  <h3 className="text-light fs-5">{title}</h3>
                  <h1 className="text-light fw-bold mt-4 ">{tagline}</h1>
                  <h2 className="hero_price fs-5 text-light mt-4">
                    {newPrice} &nbsp;
                    <small><del className="text-danger">{oldPrice}</del></small>
                  </h2>
                  <Link to={`/product-details/${id}`}>
                    <button className="btn btn-danger mt-2">Shop Now</button>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <figure className="hero_item_img">
                    <img
                      src={heroImage}
                      className="hero-img"
                      alt={title}
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          
          );
        })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
