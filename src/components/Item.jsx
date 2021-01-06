import React from "react";
import Container from "./Container";

function Item(props) {
  return (
    <div>
      <h2>{props.searchTerm} Pictures</h2>
      <Container searchTerm={props.searchTerm} />
    </div>
  );
}

export default Item;