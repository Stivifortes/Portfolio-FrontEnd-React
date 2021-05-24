import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./style.css";

import Layout from "../../components/Layout";
import LoginForm from "../../components/LoginForm";
import api from "../../services/api";

export default function Login() {
  const history = useHistory();
  const [username, setUSername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUSername(event.target.value);
    console.log("User:", event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log("Pass:", event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username,
      password,
    };
    api.post("/login", data).then((res) => {
      localStorage.setItem("token", res.data.token);
      history.replace("/admin");
    });
  };

  if (localStorage.getItem("token")) {
    return <Redirect to="/admin" />;
  }

  return (
    <Layout>
      <div className="loginContainer">
        <div>
          <h2 className="loginTitle">Login</h2>
          <div>
            <LoginForm
              handlePassword={handlePassword}
              handleUsername={handleUsername}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
