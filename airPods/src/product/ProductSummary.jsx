import React from 'react';
import reviewsData from '../data/reviewsData'

import useActive from '../hookes/useActive';
import ProductReviews from './ProductReviews';


const ProductSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container-fluid">

                    {/*===== Product-Summary=====*/}
                    <div className="product_summary">
                        <ul className="d-flex justify-content-center">
                            <li
                                className={`tabs_item ${activeClass('specs')} mx-4`}
                                onClick={() => handleActive('specs')}
                            >
                                Specifications
                            </li>
                            <li
                                className={`tabs_item ${activeClass('overview')} mx-4`}
                                onClick={() => handleActive('overview')}
                            >
                                Overview
                            </li>
                            <li
                                className={`tabs_item ${activeClass('reviews')} mx-4`}
                                onClick={() => handleActive('reviews')}
                            >
                                Reviews
                            </li>
                        </ul>
                    </div>

                    {/*===== Product-Summary-Details =====*/}
                    <div className="container-fluid">
                        {
                            active === 'specs' ? (
                                <div className=' w-50 '>
                                    <ul className='mt-5'>
                                        <li className='d-flex justify-content-between mt-3'>
                                            <span className='text-secondary'>Brand</span>
                                            <span className='text-light'>{brand}</span>
                                        </li>
                                        <li className='d-flex justify-content-between mt-3'>
                                            <span  className='text-secondary'>Model</span>
                                            <span className='text-light'>{title}</span>
                                        </li>
                                        <li className='d-flex justify-content-between mt-3'>
                                            <span  className='text-secondary'>Generic Name</span>
                                            <span className='text-light'>{category}</span>
                                        </li>
                                        <li className='d-flex justify-content-between mt-3'>
                                            <span  className='text-secondary'>Headphone Type</span>
                                            <span className='text-light'>{type}</span>
                                        </li>
                                        <li className='d-flex justify-content-between mt-3'>
                                            <span  className='text-secondary'>Connectivity</span>
                                            <span className='text-light'>{connectivity}</span>
                                        </li>
                                        <li className='d-flex justify-content-between mt-3'>
                                            <span  className='text-secondary'>Microphone</span>
                                            <span className='text-light'>Yes</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : active === 'overview' ? (
                                <div className="prod_overview">
                                    <h3>The <span>{title}</span> {info} provides with fabulous sound quality</h3>
                                    <ul>
                                        <li>Sound Tuned to Perfection</li>
                                        <li>Comfortable to Wear</li>
                                        <li>Long Hours Playback Time</li>
                                    </ul>
                                    <p>Buy the <b>{title} {info}</b> which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these {category} giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
                                </div>
                            ) : (
                                <div className="prod_reviews">
                                    <ul>
                                        {
                                            reviewsData.map(item => (
                                                <ProductReviews
                                                    key={item.id}
                                                    {...item}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;