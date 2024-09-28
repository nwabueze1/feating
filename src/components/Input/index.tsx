import { FC, useState } from "react";
import { InputProps } from "./type";
import { useInputStyles } from "./styles";
import clx from "classnames";

export const Input: FC<InputProps> = ({ type, value, onChange, onBlur, required, name, label, isError, helperText }) => {
  const classes = useInputStyles();
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "tel") {
      const phoneNumberRegexp = /^\+?[0-9]*$/; //validate if value can pass as a phone number
      if (!phoneNumberRegexp.test(e.target?.value)) {
        return;
      }
    }

    if (type === "number") {
      const regex = /^[0-9+-]*$/;

      if (!regex.test(e.target.value)) return;
    }

    onChange?.({ name: name ?? "", value: e.target.value });
  };

  return (
    <div className={clx(classes.inputContainer, "input")}>
      <input
        type={type === "number" ? "text" : type}
        className={isError ? classes.inputError : ""}
        name={name}
        value={value}
        required={required}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={toggleActive}
      />
      {label && (
        <label className={clx(classes.inputLabel, (active || value) && classes.activeLabel)}>
          {label}
          {required && <span className={classes.inputStar}>*</span>}
        </label>
      )}
      {helperText && <span className={clx(classes.helperTextDefault, isError && classes.helperTextError)}>{helperText}</span>}
    </div>
  );
};
