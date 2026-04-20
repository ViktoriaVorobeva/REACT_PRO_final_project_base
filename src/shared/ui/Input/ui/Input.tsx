import classNames from 'classnames';
import s from './Input.module.css';
import { ChangeEventHandler, FC } from 'react';

interface IInputProps {
    placeholder: string;
    id: string;
    name: string;
    type?: string;
    extraClass?: string;
    onChange?: ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
    value?: string;
}

export const Input: FC<IInputProps> = ({placeholder, id, name, extraClass, onChange, type = 'text', value}) => {
    return <input
        value={value}
        className={classNames(s['input'], extraClass)}
		name={name}
		id={id}
		type={type}
		placeholder={placeholder}
        onChange={onChange}
	/>
}