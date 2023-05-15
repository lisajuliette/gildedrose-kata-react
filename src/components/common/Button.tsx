import { ChildrenProp } from "@/types";
import { css } from "@emotion/react";

type ButtonProps = {
  onClick?: () => void;
  children: ChildrenProp;
  disabled?: boolean;
};

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  const buttonStyles = css`
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  `;

  return (
    <button
      css={buttonStyles}
      disabled={disabled}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
