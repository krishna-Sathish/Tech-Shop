import React, { useContext } from "react";
import filtersContext from "../cartFilters/FiltersContext";
import FilterBarOptions from "./FilterBarOption";

const FilterBar = () => {
  const { handleMobSortVisibility, handleMobFilterVisibility } =
    useContext(filtersContext);

  return (
    <>
      {/*===== Filterbar-default =====*/}
      <aside id="filterbar">
        <div className="filterbar_wrapper">
          <FilterBarOptions />
        </div>
      </aside>
    </>
  );
};

export default FilterBar;
