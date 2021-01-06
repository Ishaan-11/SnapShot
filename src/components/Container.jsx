import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

function Container(props) {
  const { images, loading, runSearch }= useContext(PhotoContext);

  useEffect(() => {
    runSearch(props.searchTerm);
    // eslint-disable-next-line
  }, [props.searchTerm]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
}

export default Container;