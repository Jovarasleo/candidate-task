import "./index.scss";
function Button({ children, onClick, className, buttonType }) {
  const type = buttonType ? buttonType : "button";
  return (
    <button
      className={"button".concat(" ", className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
export default Button;
