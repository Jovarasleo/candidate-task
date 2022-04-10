import "./index.scss";
function Input({
  inputType,
  children,
  placeholder,
  className,
  onChange,
  value,
  innerRef,
}) {
  const type = inputType ? inputType : "text";
  return (
    <div className="inputWrapper">
      <span className="input--icon">{children}</span>
      <input
        required
        className={"input".concat(" ", className)}
        type={type}
        placeholder={placeholder}
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = placeholder)}
        onChange={onChange}
        value={value}
        ref={innerRef}
      />
    </div>
  );
}
export default Input;
