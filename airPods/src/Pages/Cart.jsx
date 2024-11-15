import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import { displayMoney,calculateTotal } from '../calculateMoney/Money';
import useDocTitle from '../hookes/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../Components/cart/CartItem';
import EmptyView from '../main/EmptyView';


const Cart = () => {

    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);


    return (
        <>
            <section>
                <div className="container-fluid my-5 ">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<BsCartX />}
                                msg="Your Cart is Empty"
                                link="/all-products"
                                btnText="Start Shopping"
                            />
                        ) : (
                            <div className="d-flex">
                                <div className="cart_left_item">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_item ">
                                    <div className="order_summary">
                                        <h3 className='text-light ms-5 fs-5'>
                                            Order Summary &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price d-flex justify-content-around mt-5">
                                                <span className='text-secondary '>Original Price</span>
                                                <b className='text-light '>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount d-flex justify-content-around mt-5">
                                                <span className='text-secondary '>Discount</span>
                                                <b className='text-success'>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery d-flex justify-content-around mt-5">
                                                <span className='text-secondary '>Delivery</span>
                                                <b className='text-success '>Free</b>
                                            </div>
                                            <hr className='text-secondary mt-5' />
                                            <div className="total_price d-flex justify-content-around mt-4">
                                                <b><small className='text-light fw-bold fs-5 '>Total Price</small></b>
                                                <b className='text-light fw-bold fs-5'>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <button type="button" className=" btn btn-danger cart_checkout_btn mt-5">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;