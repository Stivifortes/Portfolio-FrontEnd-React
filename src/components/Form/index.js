import React, { useState } from "react";
import "./styles.css";
import api from "../../services/api";

export default function Form() {
  const [projectName, setProjectName] = useState(null);
  const [projectDescription, setProjectDescription] = useState(null);
  const [projectRepositoryUrl, setProjectRepositoryUrl] = useState(null);
  const [projectImageUrl, setProjectImageUrl] = useState(null);

  const handleProjectName = (e) => {
    setProjectName(e.target.value);
  };
  const handleDescription = (e) => {
    setProjectDescription(e.target.value);
  };
  const handleRepositoryUrl = (e) => {
    setProjectRepositoryUrl(e.target.value);
  };
  const handleImageUrl = (e) => {
    setProjectImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      project: projectName.trim(),
      description: projectDescription.trim(),
      repository: projectRepositoryUrl.trim(),
      image_url: projectImageUrl.trim(),
      id_user: 10,
    };
    try {
      const result = await api.post("/project", data);
      console.log("RESULT: ", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="project">Project</label>
        <input
          onChange={handleProjectName}
          type="text"
          name="project"
          placeholder="Project name"
          required
        />

        <label htmlFor="description">Project Description</label>
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          onChange={handleDescription}
          required
        />

        <label htmlFor="url">Repository Url</label>
        <input
          type="text"
          name="url"
          placeholder="Repository Url"
          onChange={handleRepositoryUrl}
          required
        />

        <label htmlFor="image">Featured Image</label>
        <input
          type="text"
          name="image"
          placeholder="Image Url"
          onChange={handleImageUrl}
          required
        />
        <input type="submit" value="Create Project" />
      </form>
    </div>
  );
}
