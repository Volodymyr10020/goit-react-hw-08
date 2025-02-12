import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={css.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={css.input}
            required
          />
        </label>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
