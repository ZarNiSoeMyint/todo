import React from "react";
import { isUserLoggedIn } from "../service/AuthService";
import { LoginComponent } from "./LoginComponent";

export const AuthenticatedRoute = ({ children }) => {
  const isLoggedIn = isUserLoggedIn();
  console.log("is Logged in::", isLoggedIn);

  if (!isLoggedIn) {
    return <LoginComponent />;
  }
  return children;
};
