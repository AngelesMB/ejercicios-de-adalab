import FilterCity from "./FilterCity";
import FilterGender from "./FilterGender";
import FilterName from "./FilterName";

const Filters = ({ filterName, filterGender, filterCities, updateFilter, getCities }) => {
  return (
    <section>
      <form>
        <FilterName filterName={filterName} updateFilter={updateFilter} />
        <FilterGender filterGender={filterGender} updateFilter={updateFilter} />
        <FilterCity filterCities={filterCities} updateFilter={updateFilter} getCities={getCities} />
      </form>
    </section>
  );
};

export default Filters;
