const FilterName = ({ filterName, updateFilter }) => {
  const handleFilterNameChange = (ev) => {
    updateFilter({
      key: ev.currentTarget.id,
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label className="label" htmlFor="filterName">Filtrar por nombre:</label>
      <input
        type="text"
        name="filterName"
        id="filterName"
        value={filterName}
        onChange={handleFilterNameChange}
      />
    </>
  );
};
export default FilterName;
