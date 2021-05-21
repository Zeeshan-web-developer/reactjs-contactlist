import React from "react";

function ContactList(props) {
  return (
    <div>
      {props.contact.map((contact) => (
        <li>
          {contact.name}
          <br></br>
          {contact.email}
          <button onClick={() => props.onDeletecontact(contact)}>Remove</button>
        </li>
      ))}
    </div>
  );
}

export default ContactList;
