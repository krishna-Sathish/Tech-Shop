import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { displayMoney } from '../calculateMoney/Money';
import productsData from '../data/productsData';
import '../stylesCSS/FeaturedSlider.css';
import { Link } from 'react-router-dom';

const FeaturedSlider = () => {
  const featuredProducts = productsData.filter(item => item.tag === 'featured-product');
  
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {featuredProducts.map((item) => {
          const { id, images, title, finalPrice, originalPrice, path } = item;
          const newPrice = displayMoney(finalPrice);
          const oldPrice = displayMoney(originalPrice);

          return (
            <div key={id} className="slider-item">
              <div className="featured_title text-center text-light">{title}</div>
              <figure className="featured_img">
                <Link to={`${path}${id}`}>
                  <img src={images[0]} alt={title} />
                </Link>
              </figure>
              <h2 className="products_price fs-5 text-light">
                {newPrice} &nbsp;
                <small><del className='text-danger'>{oldPrice}</del></small>
              </h2>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeaturedSlider;
