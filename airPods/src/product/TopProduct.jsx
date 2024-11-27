import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import useActive from '../hookes/useActive';
import ProductCard from './ProductCard';
import productsData from '../data/productsData';

const TopProducts = () => {
    const [products, setProducts] = useState(productsData);
    const { activeClass, handleActive } = useActive(0);

    const productsCategory = [
        'All',
        ...new Set(productsData.map(item => item.category))
    ];

    // Handling product filtering
    const handleProducts = (category, i) => {
        if (category === 'All') {
            setProducts(productsData);
            handleActive(i);
            return;
        }
        const filteredProducts = productsData.filter(item => item.category === category);
        setProducts(filteredProducts);
        handleActive(i);
    };

    return (
        <>
            {/* Category Filter */}
            <div className="filter_products">
                <ul className="d-flex flex-wrap mt-5 justify-content-center gap-3 list-unstyled">
                    {productsCategory.map((item, i) => (
                        <li
                            key={i}
                            className={`tabs_item ${activeClass(i)} px-3 py-2 rounded cursor-pointer`}
                            onClick={() => handleProducts(item, i)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product Cards */}
            <div className="container-fluid">
                <div className="row">
                    {products.slice(0, 11).map(item => (
                        <ProductCard key={item.id} {...item} />
                    ))}

                    {/* Browse All Products Card */}
                    <div className="col-12 col-md-4 h-50 col-lg-3 my-4 d-flex justify-content-center">
                        <div className="card bg-black border text-center p-4 ">
                            <Link to="/all-products" className="text-light  text-decoration-none">
                                Browse All <br /> Products <BsArrowRight className="ms-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopProducts;
