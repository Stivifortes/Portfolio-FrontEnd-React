import React, { useState } from "react";
import "./style.css";
import Layout from "../../components/Layout";
import Form from "../../components/Form";
import AdminProjectList from "../../components/AdminProjectList";
// import Authenticated from "../../components/Authenticated";
import { FaPlus } from "react-icons/fa";
import Modal from "../../components/Modal";
const Admin = () => {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Layout>
      <div className="adminContainer">
        <div>
          <h2 className="admin-title">
            Add A New Project{" "}
            <button className="addProject" onClick={handleShowModal}>
              <FaPlus />
            </button>
          </h2>
          {isShowModal && (
            <Modal handleCloseModal={handleCloseModal} purpose="addProject" />
          )}
          <div className="projectList">
            <AdminProjectList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

// export default Authenticated(Admin);
export default Admin;
