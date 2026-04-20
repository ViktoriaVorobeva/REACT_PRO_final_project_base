import classNames from 'classnames';
import s from './Button.module.css';
import { FC } from 'react';

interface IButtonProps {
    children: React.ReactNode;
    styleType?: 'primary' | 'secondary'
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    extraClass?: string;
    onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({children, disabled = false, type = 'button', extraClass, styleType = 'primary', onClick}) => {
    return <button
        type={type}
        className={classNames(s['btn'], s[styleType], extraClass)}
        disabled={disabled}
        onClick={onClick}
        >
        {children}
    </button>
}
