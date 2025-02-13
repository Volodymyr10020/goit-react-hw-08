import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import HomePage from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Refreshing user...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/dashboard"
              component={RegistrationPage}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/dashboard" component={LoginPage} />
          }
        />

        <Route
          path="dashboard"
          element={
            <PrivateRoute redirectTo="/login" component={DashboardPage} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
