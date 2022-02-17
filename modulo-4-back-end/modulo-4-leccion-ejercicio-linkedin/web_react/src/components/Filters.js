import React from "react";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import FilterByCities from "./FilterByCities";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterByGender
          filterGender={props.filterGender}
          handleFilter={props.handleFilter}
        />
        <FilterByCities
          filterCities={props.filterCities}
          cities={props.cities}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
