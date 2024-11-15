import React, { useContext } from 'react';
import filtersContext from '../cartFilters/FiltersContext';
import { sortMenu } from '../data/filterBarData';
import { displayMoney } from '../calculateMoney/Money';

const FilterBarOptions = () => {
    const {
        sortedValue,
        setSortedValue,
        updatedBrandsMenu,
        updatedCategoryMenu,
        handleBrandsMenu,
        handleCategoryMenu,
        handlePrice,
        selectedPrice: { price, minPrice, maxPrice },
        mobFilterBar: { isMobSortVisible, isMobFilterVisible },
        handleMobSortVisibility,
        handleMobFilterVisibility,
        handleClearFilters,
    } = useContext(filtersContext);

    const displayPrice = displayMoney(price);

    return (
        <div className="filterbar_scrollable_container">
            {/* Clear Filters Button */}
            {sortedValue && (
                <div className="clear_filter_btn">
                    <button
                        type="button"
                        className="btn btn-danger ms-2 mt-2"
                        onClick={handleClearFilters}
                    >
                        Clear Filters
                    </button>
                </div>
            )}

            {/* Sort Menu */}
            <div className={`sort_options ${isMobSortVisible ? 'show' : ''}`}>
                <div className="sort_head">
                    <h3 className="title text-light ms-2 mt-2">Sort By</h3>
                    <hr className='text-secondary ms-2'/>
                    <button
                        type="button"
                        className="close_btn"
                        onClick={() => handleMobSortVisibility(false)}
                    >
                        &times;
                    </button>
                </div>

                <ul className="sort_menu">
                    {sortMenu.map((item) => (
                        <li
                            key={item.id}
                            className={`${sortedValue === item.title ? 'active' : ''} text-secondary list_hover mt-2`}
                            onClick={() => setSortedValue(item.title)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Filter Menu */}
            <div className={`filter_options ${isMobFilterVisible ? 'show' : ''}`}>
                <div className="filter_head">
                    <h3 className="title text-light ms-2">Filter By</h3>
                    <hr className='text-secondary ms-2' />
                    <button
                        type="button"
                        className="close_btn"
                        onClick={() => handleMobFilterVisibility(false)}
                    >
                        &times;
                    </button>
                </div>

                {/* Filter by Brands */}
                <div className="filter_block">
                    <h4 className='text-light ms-2'>Brands</h4>
                    <ul className="filter_menu">
                        {updatedBrandsMenu.map((item) => (
                            <li key={item.id} className="text-secondary">
                                <input
                                    type="checkbox"
                                    id={item.label}
                                    value={item.label}
                                    checked={item.checked}
                                    onChange={() => handleBrandsMenu(item.id)}
                                    className='me-2'
                                />
                                <label htmlFor={item.label}>{item.label}</label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Filter by Category */}
                <div className="filter_block">
                    <h4 className='text-light ms-2'>Category</h4>
                    <ul className="filter_menu">
                        {updatedCategoryMenu.map((item) => (
                            <li key={item.id} className="filter_btn text-secondary">
                                <input
                                    type="checkbox"
                                    id={item.label}
                                    value={item.label}
                                    checked={item.checked}
                                    onChange={() => handleCategoryMenu(item.id)}
                                />
                                <label className='ms-1' htmlFor={item.label}>{item.label}</label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Filter by Price */}
                <div className="filter_block">
                    <h4 className='text-light ms-2'>Price</h4>
                    <div className="price_filter">
                        <p className='text-secondary ms-3'>{displayPrice}</p>
                        <input
                            type="range"
                            min={minPrice}
                            max={maxPrice}
                            value={price}
                            onChange={handlePrice}
                            className='range-input'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBarOptions;
