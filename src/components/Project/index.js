import React, { useState } from "react";
import "./style.css";
import image from "../../images/logo.jpg";

export default function Project(props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="projectContainer"
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <div>
        <img src={image} alt="" width="150" height="150" />
      </div>
      {isShow && (
        <div className="hidedInfo">
          <p>Project:</p>
          <p>
            Description:sfgihaojgsfijgsjflgjflsjglsfjglksfjglkfsjalkgfkgjsfgsfgjlsjfgafjsg
          </p>
          <p>URL: </p>
        </div>
      )}
    </div>
  );
}
