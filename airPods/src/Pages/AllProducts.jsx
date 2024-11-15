import React, { useContext } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import useDocTitle from '../hookes/useDocTitle';
import FilterBar from '../filters/FilterBar';
import ProductCard from '../product/ProductCard';
import Services from '../main/Services';
import filtersContext from '../cartFilters/FiltersContext';
import EmptyView from '../main/EmptyView';


const AllProducts = () => {

    useDocTitle('All Products');

    const { allProducts } = useContext(filtersContext);


    return (
        <>
            <section  className="d-flex">
                <div className='filter-bar'>
                <FilterBar />
                </div>
                <div className="container-fluid">
                    {
                        allProducts.length ? (
                            <div className="row">
                                
                                
                                {
                                    allProducts.map(item => (
                                        <ProductCard
                                            key={item.id}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <EmptyView
                                icon={<BsExclamationCircle />}
                                msg="No Results Found"
                            />
                        )
                    }
                </div>
            </section>

            <Services />
        </>
    );
};

export default AllProducts;