import React from "react";
import { useHistory } from "react-router-dom";

import serializeForm from "form-serialize";
function Addnew(props) {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    console.log(values);
    props.addnewFun(values);
    history.push("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" /> <br />
        <input type="text" placeholder="email" name="email" /> <br />
        <button>Add New</button> <br />
      </form>
    </div>
  );
}

export default Addnew;
