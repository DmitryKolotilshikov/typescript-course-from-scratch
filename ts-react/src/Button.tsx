import { FC, ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button: FC<IButtonProps> = (props) => {
  return <button className={props.className} onClick={props.onClick}>{props.children}</button>;
};
