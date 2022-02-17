import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  return (
    <div className="card">
      <Link to="/">Volver al inicio</Link>
      <header>
        <h2>{props.contact.name}</h2>
      </header>
      <section>
        <img
          className="card__img"
          src={props.contact.image}
          alt={props.contact.name}
        />
        <h4 className="card__title">{props.contact.name}</h4>
        <ul className="ml-1 mt-1">
          <li>Género: {props.contact.gender}</li>
          <li>Email: {props.contact.email}</li>
          <li>Nick: {props.contact.contactname}</li>
          <li>Ciudad: {props.contact.city}</li>
          <li>País: {props.contact.country}</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactDetail;
