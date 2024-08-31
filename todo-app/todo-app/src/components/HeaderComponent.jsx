import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout } from "../service/AuthService";

export const HeaderComponent = () => {
  const isAuth = isUserLoggedIn();
  const navigator = useNavigate();
  const logoutFun = () => {
    logout();
    navigator("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-success text-white">
        <div className="container">
          <a href="#" className="navbar-brand">
            Todos
          </a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {isAuth && (
              <>
                <li className="nav-item">
                  <Link to="/todos" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add-todo" className="nav-link">
                    New Todo
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={logoutFun} className="nav-link">
                    Logout
                  </button>
                </li>{" "}
              </>
            )}
            {!isAuth && (
              <>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
