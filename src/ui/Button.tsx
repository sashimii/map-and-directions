import * as React from 'react';
import './Button.scss';

interface ButtonProps {
  children: string;
  handleClick(e): void;
  disabled: boolean;
}

export const Button: React.SFC<ButtonProps> = ({ children, handleClick, disabled }) => {
  return (
    <button
      className="button button__text button--orange"
      onClick={e => handleClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};