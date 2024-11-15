import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import commonContext from '../common/CommonContext';
import productsData from '../data/productsData';
import useOutsideClose from '../hookes/useOutsideClose';
import useScrollDisable from '../hookes/useScrollDisable';

const SearchBar = () => {
    const { isSearchOpen, toggleSearch, searchResults, setSearchResults } = useContext(commonContext);

    const searchRef = useRef();

    const [visibleResults, setVisibleResults] = useState([]);

    // Closing the SearchBar
    const closeSearch = () => {
        toggleSearch(false);
        setSearchResults([]);
    };

    useOutsideClose(searchRef, closeSearch);

    useScrollDisable(isSearchOpen);

    // Handling Search
    const handleSearching = (e) => {
        const searchedTerm = e.target.value.toLowerCase().trim();
        const updatedSearchResults = productsData.filter(item => item.title.toLowerCase().includes(searchedTerm));
        searchedTerm === '' ? setSearchResults([]) : setSearchResults(updatedSearchResults);
    };

    // Showing results one by one with a delay
    useEffect(() => {
        if (searchResults.length > 0) {
            setVisibleResults([]);
            searchResults.forEach((item, index) => {
                setTimeout(() => {
                    setVisibleResults(prev => [...prev, item]);
                }, index * 200); // Add delay of 200ms between each result
            });
        }
    }, [searchResults]);

    return (
        <>
            {isSearchOpen && (
                <div ref={searchRef}>
                    <div>
                        <input
                            type="search"
                            className="search_input_field"
                            placeholder="Search for product..."
                            onChange={handleSearching}
                        />
                    </div>

                    {visibleResults.length !== 0 && (
                        <div className="search_results">
                            {visibleResults.map(item => {
                                const { id, title, path } = item;
                                return (
                                    <Link
                                        to={`${path}${id}`}
                                        onClick={closeSearch}
                                        key={id}
                                        className='text-decoration-none'
                                    >
                                        {title} 
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default SearchBar;
