import React from 'react';
import { IoMdStar } from 'react-icons/io';

const ProductReviews = (props) => {

    const { name, date, review, rateCount } = props;

    return (
        <>
            <li>
                <div className="d-flex">
                    <img className='review-img' src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png" alt="user-img" />
                    <div>
                        <h4 className='text-light ms-4'>{name}</h4>
                        <div className="user_ratings">
                            <span className="reviews-star ms-4">
                                {
                                    [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                                }
                            </span>
                            <span className='text-light ms-1'>|</span>
                            <span className="text-secondary ms-2">{date}</span>
                        </div>
                    </div>
                </div>
                <p className="text-secondary mt-2">{review}</p>
            </li>
        </>
    );
};

export default ProductReviews;