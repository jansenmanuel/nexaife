
import * as React from 'react';

declare const ButtonSizes: ["xs", "sm", "md", "lg", "xl", "xxl"];
declare const ButtonTypes: ["primary", "secondary", "tertiary", "link"];
export type ButtonType = typeof ButtonTypes[number];
export type ButtonSize = typeof ButtonSizes[number];

export interface BaseButtonProps {
  size?: ButtonSize
  id?: string;
  label?: string;
  type?: string
  ButtonType?: ButtonType;
  disabled?: boolean; 
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  mainColor?: string;
  secondaryColor?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  roundedIcon?: boolean;
  error?: boolean;
  badge?: boolean;
  icon?: React.ReactNode;
}

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps

declare const Button: React.FC<ButtonProps>;

export default Button;