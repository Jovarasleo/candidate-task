import Input from "../input";
import Button from "../button";
import PersonSVG from "../../icons/akar-icons_person.svg";
import PasswordKey from "../../icons/passwordKey.svg";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import auth from "../../../auth";
import "./index.scss";
function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = useRef(false);
  const isPasswordValid = useRef(false);

  const selectEmail = useRef();
  const selectPassword = useRef();

  const [message, setMessage] = useState();

  const getUserError = useSelector(auth.selectors.getUserError);

  const validateEmail = (email) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(email)) {
      setMessage("");
      isEmailValid.current = true;
    } else {
      selectEmail.current.focus();
      setMessage("Email is missing or invalid");
      isEmailValid.current = false;
    }
  };
  const validatePassword = (password) => {
    const reg = password.length;
    if (reg > 2) {
      setMessage("");
      isPasswordValid.current = true;
    } else {
      selectPassword.current.focus();
      setMessage("Password is missing or invalid");
      isPasswordValid.current = false;
    }
  };
  const LogIn = async () => {
    dispatch(auth.actions.setUser(name, password));
  };
  const handleLogin = (e) => {
    e.preventDefault();

    validateEmail(name);
    if (isEmailValid.current) {
      validatePassword(password);
    }
    if (isEmailValid.current && isPasswordValid.current) {
      LogIn(e);
    }
  };
  return (
    <form className="form">
      <h2>Login</h2>
      <h4>Please enter you Login and your Password</h4>
      <Input
        className="form--input"
        placeholder="Username or E-mail"
        onChange={(e) => setName(e.target.value)}
        value={name}
        inputType={"email"}
        innerRef={selectEmail}
      >
        <PersonSVG />
      </Input>
      <Input
        className="form--input"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        inputType={"password"}
        innerRef={selectPassword}
      >
        <PasswordKey />
      </Input>
      {message ? <p className="errorMessage">{message}</p> : null}
      {getUserError && !message && (
        <p className="errorMessage">{getUserError}</p>
      )}
      <Button
        className="form--button"
        buttonType="submit"
        onClick={(e) => handleLogin(e)}
      >
        Login
      </Button>
    </form>
  );
}
export default Form;
