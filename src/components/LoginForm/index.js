import React from "react";
import "../Form/styles.css";

export default function LoginForm(props) {
  const { handlePassword, handleUsername, handleSubmit } = props;

  return (
    <div style={{ padding: "5px", width: "350px" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleUsername}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
