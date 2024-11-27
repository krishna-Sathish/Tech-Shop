import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdStar, IoMdCheckmark } from 'react-icons/io';
import { displayMoney, calculateDiscount } from '../calculateMoney/Money';
import useDocTitle from '../hookes/useDocTitle';
import useActive from '../hookes/useActive';
import cartContext from '../contexts/cart/cartContext';
import productsData from '../data/productsData';
import SectionsHead from '../main/SectionHead';
import RelatedSlider from '../sliders/RelatedSlider';
import ProductSummary from '../product/ProductSummary';
import Services from '../main/Services';

const ProductDetails = () => {
    useDocTitle('Product Details'); 
    const { handleActive, activeClass } = useActive(0);
    const { addItem } = useContext(cartContext);
    const { productId } = useParams();
    const prodId = parseInt(productId); 

    const product = productsData.find(item => item.id === prodId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const { images, title, info, category, finalPrice, originalPrice, ratings, rateCount } = product;
    const [previewImg, setPreviewImg] = useState(images[0]);

    const handleAddItem = () => {
        addItem(product);
    };

    useEffect(() => {
        setPreviewImg(images[0]);
        handleActive(0);
    }, [images]);

    const handlePreviewImg = (i) => {
        setPreviewImg(images[i]);
        handleActive(i);
    };

    const discountedPrice = originalPrice - finalPrice;
    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);
    const savedPrice = displayMoney(discountedPrice);
    const savedDiscount = calculateDiscount(discountedPrice, originalPrice);

    return (
        <>
            <section id="product_details" className="section py-5">
                <div className="container">
                    <div className="row">
                        {/* Left Column for Images */}
                        <div className="col-lg-6 col-md-12 d-flex">
                            {/* Thumbnails Vertical Sidebar */}
                            <div className="d-flex flex-column me-3">
                                {images.map((img, i) => (
                                    <div
                                        key={i}
                                        className={`mb-2 ${activeClass(i)} tabs_item`}
                                        onClick={() => handlePreviewImg(i)}
                                    >
                                        <img src={img} alt="product-img" className=" thumbnail-img" />
                                    </div>
                                ))}
                            </div>
                            {/* Main Product Image */}
                            <figure className="prod_details_img mb-4 flex-grow-1">
                                <img src={previewImg} alt="product-img" className="img-fluid w-100 " />
                            </figure>
                        </div>

                        {/* Right Column for Details */}
                        <div className="col-lg-6 col-md-12">
                            <h1 className="text-light mb-3">{title}</h1>
                            <h4 className="text-secondary mb-3">{info}</h4>
                            <div className="text-danger mb-3">
                                <span className="rating_star">
                                    {[...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)}
                                </span>
                                <span className="mx-2 text-light">|</span>
                                <Link to="*" className='text-decoration-none text-secondary'>{ratings} Ratings</Link>
                            </div>
                            <hr className='text-secondary' />
                            <div className=" mb-3 d-flex justify-content-between">
                                <div className="price_box">
                                    <h2 className="text-light d-flex align-items-center">
                                        {newPrice} &nbsp;
                                        <small className="text-secondary"><del>{oldPrice}</del></small>
                                    </h2>
                                    <p className="text-success">You save: {savedPrice} ({savedDiscount}%)</p>
                                    <span className="text-secondary">(Inclusive of all taxes)</span>
                                </div>
                                <div className="my-2">
                                    <span className='badge rounded-pill text-bg-success mt-5'><IoMdCheckmark /> In Stock</span>
                                </div>
                            </div>
                            <hr className='text-secondary' />
                            <div className="pro-offers mb-3">
                                <h4 className='text-light'>Offers and Discounts</h4>
                                <ul className='d-flex mt-3'>
                                    <li className='border border-secondary p-2 text-secondary'>No Cost EMI on Credit Card</li>
                                    <li className='border border-secondary ms-3 p-2 text-secondary'>Pay Later & Avail Cashback</li>
                                </ul>
                            </div>
                            <hr className='text-secondary mt-3' />
                            <div className=" mb-3">
                                <button type="button" className="btn pro-button" onClick={handleAddItem}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductSummary {...product} />
            <section id="related_products">
                <div className="container-fluid">
                    <SectionsHead heading="Related Products" />
                    <RelatedSlider category={category} />

                </div>
            </section>
            <div className='survices-section'>
            <Services />
                 
            </div>
        </>
    );
};

export default ProductDetails;
