import React from "react";
import Contact from "./Contact";

const ContactList = (props) => {
  const contactElements = props.contacts.map((contact) => {
    return (
      <li key={contact.id}>
        <Contact contact={contact} />
      </li>
    );
  });

  return (
    <section>
      <ul className="cards">{contactElements}</ul>
    </section>
  );
};

export default ContactList;
