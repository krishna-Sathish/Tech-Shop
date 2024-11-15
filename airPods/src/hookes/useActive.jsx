import { useState } from 'react';

const useActive = (initState) => {
    const [active, setActive] = useState(initState);

    const handleActive = (i) => {
        setActive(i);
    };

    const activeClass = (i) => {
        return active === i ? 'active' : '';
    };

    return { active, handleActive, activeClass };
};

export default useActive;

// import { useState } from 'react';

// const useActive = (initialIndex) => {
//     const [activeIndex, setActiveIndex] = useState(initialIndex);

//     const handleActive = (index) => setActiveIndex(index);

//     const activeClass = (index) => (index === activeIndex ? 'active' : '');

//     return { activeClass, handleActive };
// };

// export default useActive;
