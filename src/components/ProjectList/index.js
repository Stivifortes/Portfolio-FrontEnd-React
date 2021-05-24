import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import api from "../../services/api";
import Project from "../Project";

export default function ProjectList(props) {
  const { showButtons } = props;
  const [projects, setProjects] = useState(null);

  const location = useLocation();
  console.log(location);

  if (location.pathname) {
  }
  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data.projects))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="projectList">
      {projects !== null &&
        projects.map((p) => {
          return (
            <Project
              image_url={p.image_url}
              description={p.description}
              repository={p.repository}
              project={p.name}
              showButtons={showButtons}
            />
          );
        })}
    </div>
  );
}
