import { useDispatch, useSelector } from "react-redux";
import { logout as logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p className={css.userName}>Welcome, {userName}!</p>
      <button onClick={() => dispatch(logOut())} className={css.button}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
