import React from "react";
import { useAuthentication } from "../useAuthentication";
import "./style.css";

const Project = (props) => {
  const { image_url, project, repository, description, showButtons } = props;

  const isAuthenticated = useAuthentication();

  return (
    <div className="projectContainer">
      <div>
        <img src={image_url} alt="" width="150" height="150" />
      </div>
      <div className="hidedInfo">
        <p>Project: {project}</p>
        <p>Description:{description}</p>
        <p>URL: {repository} </p>
        {isAuthenticated && showButtons && (
          <>
            <button>Edit</button>
            <button>Remove</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
