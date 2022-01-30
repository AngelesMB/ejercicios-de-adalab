import "../styles/EmailDetail.scss";
import { Link } from "react-router-dom";

const EmailDetail = (props) => {
  const handleDelete = (ev) => {
    props.updateEmailArrays(ev.currentTarget.id);
  };
  return (
    <section>
      <div className="email__title--container">
        <h2>{props.selectedEmail.subject}</h2>
        <div className="icon__container">
          <Link to="/">
            <i className="fa fa-times-circle icon" />
          </Link>
          <Link to="/">
            <i
              className="fa fa-trash icon"
              aria-hidden="true"
              id={props.selectedEmail.id}
              onClick={handleDelete}
            />
          </Link>
        </div>
      </div>
      <h3>
        <span className="email__title">{props.selectedEmail.fromName}</span>
        <span className="email__title">{`<${props.selectedEmail.fromEmail}>`}</span>
      </h3>
      <p className="email__body">{props.selectedEmail.body}</p>
      <div className="button__container">
        <div className="button notClickable">
          <i className="fas fa-reply" /> Responder
        </div>
        <div className="button notClickable">
          <i className="fas fa-reply-all" />
          Responder a todos
        </div>
        <div className="button notClickable">
          <i className="fas fa-share" />
          Reenviar a todos
        </div>
      </div>
    </section>
  );
};
export default EmailDetail;
