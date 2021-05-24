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
            Lorem ipsum doloris aicajh korem ipsum doloris aicajh Lorem ipsum
            doloris aicajhLorem ipsum doloris aicajhLorem ipsum doloris
            aicajhLorem ipsum doloris aicajhLorem ipsum doloris aicajh
          </p>
          <ProjectList />
        </div>
      </div>
    </Layout>
  );
}
