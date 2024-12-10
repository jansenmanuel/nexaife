import * as React from 'react';

declare const AlertStates: ["warning", "success", "information", "error"];
export type AlertState = typeof AlertStates[number];

export interface BaseAlertProps {
  key?: string;
  state?: string;
  caption?: string;
  style?: React.CSSProperties;
  className?: string;
  state?: AlertState;
}   

export type AlertProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseAlertProps

declare const Alert: React.FC<AlertProps>;

export default Alert;