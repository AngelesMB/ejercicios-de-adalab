import { Link } from "react-router-dom";

const EmailListItem = (props) => {
  const handleDelete = (ev) => {
    props.updateEmailArrays(ev.currentTarget.id);
  };

  return (
    <tr className="table__row" key={props.id}>
      <td id={props.id}>
        <Link className="table__link" to={`/email/${props.id}`}>
          {props.fromName}
        </Link>
      </td>
      <td id={props.id}>
        <Link className="table__link" to={`/email/${props.id}`}>
          {props.subject}
        </Link>
      </td>
      <td id={props.id}>
        <Link className="table__link" to={`/email/${props.id}`}>
          {props.date}
        </Link>
      </td>
      <td>
        <i
          className="fa fa-trash icon"
          aria-hidden="true"
          id={props.id}
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};
export default EmailListItem;
