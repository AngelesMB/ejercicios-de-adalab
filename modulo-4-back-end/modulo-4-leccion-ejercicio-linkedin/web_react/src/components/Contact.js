import React from "react";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const getGender = () => {
    if (props.contact.gender === "female") {
      return "Mujer";
    } else if (props.contact.gender === "male") {
      return "Hombre";
    } else {
      return "No binario";
    }
  };

  return (
    <Link to={`/contact/${props.contact.id}`}>
      <article className="card">
        <img
          className="card__img"
          src={props.contact.image}
          alt={`Foto de ${props.contact.name}`}
          title={`Foto de ${props.contact.name}`}
        />
        <h4 className="card__title">{props.contact.name}</h4>
        <p className="card__description">
          {props.contact.city} / {getGender()}
        </p>
      </article>
    </Link>
  );
};

export default Contact;
