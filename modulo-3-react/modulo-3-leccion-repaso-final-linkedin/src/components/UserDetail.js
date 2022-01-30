import { Link } from "react-router-dom";

const UserDetail = ({ user }) => {
  return (
    <>
      <Link to="/">Volver al inicio</Link>
      <h2>Detalle del usuario:</h2>
      <img
        src={user.photo}
        alt={`Foto de ${user.name}`}
        title={`Foto de ${user.name}`}
      />
      <h4>{user.name}</h4>
      <p>{user.city} </p>
      <p>{user.age} </p>
      <p>{user.email} </p>
    </>
  );
};

export default UserDetail;
