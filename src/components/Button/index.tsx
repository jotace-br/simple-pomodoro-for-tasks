import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({ onClick, type, children }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};
