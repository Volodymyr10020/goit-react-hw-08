import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div className={css.nav}>
    <NavLink to="/register" className={css.link}>
      Register
    </NavLink>
    <NavLink to="/login" className={css.link}>
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
