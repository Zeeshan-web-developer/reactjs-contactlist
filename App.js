import "./App.css";
import ContactList from "./ContactList";
import Addnew from "./Addnew";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Clacrk", email: "clacrk@gmail.com" },
    { id: 3, name: "Dyana", email: "dyana@gmail.com" },
  ]);
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const addnew = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/addnew">
          <Addnew addnewFun={addnew} />
        </Route>
        <Route exact path="/">
          <ContactList contact={contacts} onDeletecontact={removeContact} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
