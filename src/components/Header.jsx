import React from "react";
import { useHistory } from "react-router-dom";
import Form from "./Form";
import Navigation from "./Navigation";

function Header(props) {
  let _history = useHistory();

  function handleSubmit(e, history, searchInput) {
    e.preventDefault();
    // e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  return (
    <div>
      <h1>SnapShot</h1>
      <Form history={_history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
}

export default Header;
