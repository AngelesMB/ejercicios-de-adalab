import { Link } from "react-router-dom";

const User = ({ user }) => {
  const getGender = () => {
    return user.gender === "male" ? "Hombre" : "Mujer";
  };
  return (
    <Link to={`/user/${user.id}`}>
      <img
        src={user.photo}
        alt={`Foto de ${user.name}`}
        title={`Foto de ${user.name}`}
      />
      <h4>{user.name}</h4>
      <p>{`${user.city} / ${getGender()}`}</p>
    </Link>
  );
};

export default User;
