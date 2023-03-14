import { ButtonHTMLAttributes, FC } from "react";

import {
  BaseButton,
  ButtonRadio,
  ButtonRadioActive,
  ButtonText,
} from "./button.styles";

export enum BUTTON_TYPES {
  base = "base",
  radio = "radio",
  radio_active = "radio_active",
}

const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.radio]: ButtonRadio,
    [BUTTON_TYPES.radio_active]: ButtonRadioActive,
  }[buttonType]);

type ButtonProps = {
  buttonType?: BUTTON_TYPES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ buttonType, children, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      <ButtonText>{children}</ButtonText>
    </CustomButton>
  );
};

export default Button;
