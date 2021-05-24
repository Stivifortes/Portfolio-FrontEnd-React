import React from "react";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router";
import { useAuthentication } from "../useAuthentication";

export default function Authenticated(WrappedComponent) {
  const isAuthenticated = useAuthentication();

  return (props) => {
    if (!isAuthenticated) return <Redirect to="/" />;
    return <WrappedComponent {...props} />;
  };
}
