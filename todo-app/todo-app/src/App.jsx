import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { FooterComponent } from "./components/FooterComponent";
import { ListTodoComponent } from "./components/ListTodoComponent";
import { TodoFormComponent } from "./components/TodoFormComponent";
import { RegisterationComponent } from "./components/RegisterationComponent";
import { LoginComponent } from "./components/LoginComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route
            path="/"
            element={
              <AuthenticatedRoute>
                <ListTodoComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/todos"
            element={
              <AuthenticatedRoute>
                <ListTodoComponent />
              </AuthenticatedRoute>
            }
          ></Route>

          <Route path="/add-todo" Component={TodoFormComponent}></Route>
          <Route path="/update-todo/:id" Component={TodoFormComponent}></Route>
          <Route path="/register" Component={RegisterationComponent}></Route>
          <Route path="/login" Component={LoginComponent}></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
