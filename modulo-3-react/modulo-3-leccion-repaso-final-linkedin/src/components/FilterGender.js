const FilterGender = ({ filterGender, updateFilter }) => {
  const handleFilterGenderChange = (ev) => {
    updateFilter({
      key: ev.currentTarget.id,
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <label className="label" htmlFor="filterGender">Género:</label>

      <select
        name="filterGender"
        id="filterGender"
        value={filterGender}
        onChange={handleFilterGenderChange}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
};
export default FilterGender;
