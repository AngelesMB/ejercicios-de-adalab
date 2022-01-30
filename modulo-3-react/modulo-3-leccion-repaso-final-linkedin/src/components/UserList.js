import User from "./User";

const UserList = ({ users }) => {
  return (
    <section>
      <ul className="users__container">
        {users.map((eachUser) => (
          <li className="user__list--item" key={eachUser.id}>
            <User user={eachUser} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default UserList;
