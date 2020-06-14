import React from "react";
import Development from "./../../assets/development.jpg";
import Design from "./../../assets/design.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Development})`,
          }}
        >
          <a>Development</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Design})`,
          }}
        >
          <a>Design</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
