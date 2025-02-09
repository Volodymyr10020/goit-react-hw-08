import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Shared/Navigation.jsx";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import ContactsPage from "../src/pages/ContactsPage";
import LoginPage from "../src/pages/LoginPage";
import RegistrationPage from "../src/pages/RegistrationPage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Welcome</h1>} />
          <Route
            path="contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
