import React from "react";
import { useParams } from "react-router-dom";
import Container from "./Container";

function Item() {
  let { searchTerm } = useParams();

  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
}

export default Item;
