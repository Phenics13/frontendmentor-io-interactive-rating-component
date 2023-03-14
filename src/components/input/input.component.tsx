import { FC, InputHTMLAttributes } from "react";

import { InputContainer } from "./input.styles";

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, ...otherProps }) => {
  return <InputContainer placeholder={label} {...otherProps} />;
};

export default Input;
