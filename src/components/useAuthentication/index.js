import React from "react";
import jwt_decode from "jwt-decode";

export const useAuthentication = () => {
  let isAuthenticated = false;
  try {
    const token = localStorage.getItem("token");
    if (!token) isAuthenticated = false;
    isAuthenticated = !!jwt_decode(token);
  } catch {
    isAuthenticated = false;
  }

  return isAuthenticated;
};
