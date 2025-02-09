import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import ContactsPage from "../src/pages/ContactsPage";
import LoginPage from "../src/pages/LoginPage";
import RegistrationPage from "../src/pages/RegistrationPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Welcome</h1>} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
