import React, { useContext } from 'react';
import cartContext from '../contexts/cart/cartContext';


const QuantityBox = (props) => {

    const { itemId, itemQuantity } = props;

    const { incrementItem, decrementItem } = useContext(cartContext);


    return (
        <>
            <div className="quantity_box mt-3 ms-3">
                <button
                    type="button"
                    onClick={() => decrementItem(itemId)}
                    className='btn btn-danger ms-2'
                >
                    -
                </button>
                <span className="text-light ms-3">
                    {itemQuantity}
                </span>
                <button
                    type="button"
                    onClick={() => incrementItem(itemId)}
                    disabled={itemQuantity >= 5}
                    className='btn btn-success ms-3'
                >
                    +
                </button>
            </div>
        </>
    );
};

export default QuantityBox;