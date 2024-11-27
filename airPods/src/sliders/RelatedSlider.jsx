import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from '../data/productsData';
import { Link } from 'react-router-dom';
import { IoMdStar } from 'react-icons/io';

const RelatedSlider = ({ category }) => {

   

    const relatedProduct = productsData.filter(item => item.category === category);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='row'>
            <Slider {...settings}>
                {relatedProduct.map((item) => (
                    <div key={item.id} className='card bg-black border p-2'>
                        <Link to={`/product-details/${item.id}`} >
                        <img src={item.images[0]} alt="related-img" className='img-fluid card-img-top' />
                        </Link>
                        <div className="card-body d-flex flex-column">
                            <div className="text-danger mb-2">
                                {[...Array(item.rateCount || 0)].map((_, i) => <IoMdStar key={i} />)}
                            </div>
                            <h3 className="card-title mb-2">
                                <Link
                                    className="text-decoration-none text-light fs-5 fw-bold"
                                    to={`/product-details/${item.id}`} 
                                >
                                    {item.title}
                                </Link>
                            </h3>
                            <p className="card-text text-secondary product_title mb-3">{item.info}</p>
                            <div className="border-bottom text-secondary mb-3"></div>
                            <h2 className="text-light fs-5 mb-3">
                                ${item.finalPrice} &nbsp;
                                <small><del className="text-danger">${item.originalPrice}</del></small>
                            </h2>
                           
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RelatedSlider;
