import React from "react";
import "./style.css";
import Layout from "../../components/Layout";
import Project from "../../components/Project";

export default function Portfolio() {
  return (
    <Layout>
      <div className="portfolioContainer">
        <div className="portfolioMain">
          <h1>My Personal Portfolio</h1>
          <p className="resume">
            Lorem ipsum doloris aicajh korem ipsum doloris aicajh Lorem ipsum
            doloris aicajhLorem ipsum doloris aicajhLorem ipsum doloris
            aicajhLorem ipsum doloris aicajhLorem ipsum doloris aicajh
          </p>
          <div className="projectList">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </Layout>
  );
}
