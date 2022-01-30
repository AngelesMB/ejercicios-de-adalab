const FilterCity = ({ getCities, updateFilter, filterCities }) => {
  const handleChange = (ev) => {
    updateFilter({ key: "filterCity", value: ev.currentTarget.value });
  };

  const citiesHtml = getCities.map((eachCity, index) => {
    return (
      <li key={index}>
        <label>
          <input
            type="checkbox"
            name="location"
            value={eachCity}
            checked={filterCities.includes(eachCity) ? true : false}
            onChange={handleChange}
          />
          {eachCity}
        </label>
      </li>
    );
  });

  return (
    <>
      <label htmlFor="location" className="label">Ciudad:</label>
      <ul>{citiesHtml}</ul>
    </>
  );
};
export default FilterCity;
