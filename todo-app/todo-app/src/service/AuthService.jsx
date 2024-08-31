import axios from "axios";

const BASE_AUTH_URL = "http://localhost:8080/auth";
export const resgiter_user = (user) =>
  axios.post(`${BASE_AUTH_URL}/register`, user);
export const login_api_call = (userNameOrEmail, password) =>
  axios.post(`${BASE_AUTH_URL}/login`, { userNameOrEmail, password });

export const storeToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");

export const savedLoggedInUser = (username) =>
  sessionStorage.setItem("authenticatedUser", username);
export const isUserLoggedIn = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  if (username == null) {
    return false;
  } else {
    return true;
  }
};
export const getLoggedInUser = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  return username;
};

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  //window.location.reload(false);
};
