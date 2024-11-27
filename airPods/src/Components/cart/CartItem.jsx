import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TbTrash } from 'react-icons/tb';

import { displayMoney } from '../../calculateMoney/Money';
import cartContext from '../../contexts/cart/cartContext';

import QuantityBox from '../../main/QuantityBox';


const CartItem = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, quantity, path } = props;

    const { removeItem } = useContext(cartContext);

    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);


    return (
        <>
            <div className="container d-flex flex-column flex-md-row  justify-content-md-around  cart_item p-5">
                <div>
                <figure className="cart_item_img">
                    <Link to={`${path}${id}`}>
                        <img src={images[0]} className='cart-img' alt="product-img" />
                    </Link>
                </figure>
                </div>
                    <div className="cart_item_head">
                        <h4 className="cart_item_title">
                            <Link to={`/product-details/${id} `} className='text-decoration-none text-secondary  fs-4'>{title}{info}</Link>
                        </h4>
                        <h2 className="text-light fs-5 mt-3 ms-3">
                        {newPrice} &nbsp;
                        <small><del className='text-secondary'>{oldPrice}</del></small>
                    </h2>
                    <QuantityBox itemId={id} itemQuantity={quantity} />
                      </div>
                        <div className="cart_item_del">
                            <span onClick={() => removeItem(id)} className='trash_icon fs-5'>
                                <TbTrash />
                            </span>
                        </div>
                    </div>
                    <hr className='text-light  mx-4' />
                 
        </>
    );
};

export default CartItem;