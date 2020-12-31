import React from "react";
import Gif from "../imgs/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Gif} alt="loader" />
    </div>
  );
};

export default Loader;
