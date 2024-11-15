import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hookes/useScrollRestore';
import AllProducts from '../Pages/AllProducts';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';
import ErrorPage from '../Pages/ErrorPage';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/product-details/:productId" element={<ProductDetails />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;