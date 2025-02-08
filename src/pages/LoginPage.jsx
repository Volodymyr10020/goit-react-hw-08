import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as logIn } from "../redux/auth/operations";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={css.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={css.input}
            required
          />
        </label>
        <label className={css.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={css.input}
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
