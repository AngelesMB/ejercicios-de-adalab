import "../styles/Table.scss";

const Table = (props) => {
  const rowsHtml = props.data
    .filter((eachUser) =>
      eachUser.name.toLowerCase().includes(props.searchValue.toLowerCase())
    )
    .map((eachUser, index) => {
      return (
        <tr className="table__row" key={index}>
          <td>{eachUser.name}</td>
          <td>{eachUser.gender}</td>
          <td>{eachUser.age}</td>
          <td>
            <img src={eachUser.image} alt="User" />
          </td>
        </tr>
      );
    });
  return (
    <div className="main__container--table">
      <table className="table">
        <thead className="table__header">
          <tr>
            <th className="table__column">Nombre Completo</th>
            <th className="table__column">Género</th>
            <th className="table__column">Edad</th>
            <th className="table__column">Foto</th>
          </tr>
        </thead>
        <tbody>{rowsHtml}</tbody>
      </table>
    </div>
  );
};

export default Table;
