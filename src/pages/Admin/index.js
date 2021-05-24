import React from "react";
import "./style.css";
import Layout from "../../components/Layout";
import Form from "../../components/Form";
import AdminProjectList from "../../components/AdminProjectList";
import Authenticated from "../../components/Authenticated";

const Admin = () => {
  return (
    <Layout>
      <div className="adminContainer">
        <div>
          <h2 style={{ textAlign: "center", margin: "25px" }}>
            Create A New Project
          </h2>
          <div className="projectList">
            <AdminProjectList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Authenticated(Admin);
