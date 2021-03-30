import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const AddPersonForm = (props) => {
  // Form that lets user enter contact and phone
  const [person, setPerson] = useState("");
  const [phone, setPhone] = useState("");

  // We need to update the state of a component that is above this, since,
  //The new state will be displayed by another
  const contacthandler = props.contacthandler;
  const phonehandler = props.phonehandler;

  //Event handlers for input changes
  const handlecontactChange = (e) => {
    setPerson(e.target.value);
  };
  const handlephoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Clean up upon submitting
  const resetState = () => {
    setPerson("");
    setPhone("");
  };

  // Update the state in the higher component by calling the callback functions
  const handleSubmit = (e) => {
    e.preventDefault();
    contacthandler(person);
    phonehandler(phone);
    resetState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handlecontactChange}
        value={person}
      />
      <input
        type="text"
        placeholder="Add phone number"
        onChange={handlephoneChange}
        value={phone}
      />
      <button type="submit">Add</button>
    </form>
  );
};

/* 
To pass callbacks down components
Define the function in the higher level component, and pass it as a prop to the lower level
*/

const PeopleList = (props) => {
  // Receives two props, which ought to match
  const contacts = props.contacts;
  const phone = props.phone;

  //Create a component that zips two arrays and gets the values from both
  //contact 1, phone 1; contact2, phone 2 ...
  const data = contacts.map((k, i) => [k, phone[i]]);

  //Create a function to render the list of components using map
  const listItems =
    data &&
    data.map((val, index) => (
      <li key={index}>
        {val[0]} has a phone number: {val[1]}
      </li>
    ));
  // Return the  rendered list
  return <ul>{listItems}</ul>;
};

// Higher level components
const ContactManager = () => {
  //Initialize state for contact and phone
  const [contacts, setContact] = useState([]);
  const [phone, setPhone] = useState([]);

  //Define handlers to update state
  const contactHandler = (name) => {
    setContact([...contacts, name]);
  };
  const phoneHandler = (name) => {
    setPhone([...phone, name]);
  };

  //Render the two separate components  with different props, one for handler the other for the actual states
  return (
    <div>
      <AddPersonForm
        contacthandler={contactHandler}
        phonehandler={phoneHandler}
      />
      <PeopleList contacts={contacts} phone={phone} />
    </div>
  );
};
ReactDOM.render(<ContactManager />, document.getElementById("root"));
