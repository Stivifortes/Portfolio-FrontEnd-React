import "./style.css";
import Layout from "../../components/Layout";
import ProjectList from "../../components/ProjectList";

export default function Portfolio() {
  return (
    <Layout>
      <div className="portfolioContainer">
        <div className="portfolioMain">
          <h1>My Personal Portfolio</h1>
          <p className="resume">
            Last projects i've been working to Lorem ipsum doloris.
          </p>
          <ProjectList />
        </div>
      </div>
    </Layout>
  );
}
