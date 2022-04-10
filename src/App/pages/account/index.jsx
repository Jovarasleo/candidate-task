import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import auth from "../../../auth";
import "./index.scss";

function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUser = useSelector((state) => auth.selectors.getUser(state));
  const user = Object.keys(getUser).length !== 0;
  const logout = () => {
    dispatch(auth.actions.logout());
  };
  useEffect(() => {
    if (!user) navigate("/", { replace: true });
  }, [user]);
  return (
    <div className="userWrapper">
      <div className="message">Logged In</div>
      <Button onClick={logout} className="logoutButton">
        LOGOUT
      </Button>
    </div>
  );
}
export default Account;
