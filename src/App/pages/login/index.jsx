import Form from "../../components/loginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import auth from "../../../auth";
import { useSelector } from "react-redux";
import "./index.scss";
function Login() {
  const navigate = useNavigate();
  const getUser = useSelector((state) => auth.selectors.getUser(state));
  const user = Object.keys(getUser).length !== 0;
  useEffect(() => {
    if (user) navigate("/user", { replace: true });
  }, [user]);
  return <>{!user ? <Form className="form" /> : null}</>;
}
export default Login;
