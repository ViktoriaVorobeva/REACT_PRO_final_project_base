import { FC, useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import s from './Modal.module.css';
import cn from 'classnames';

interface IModalProps {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
    title: string;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
}
// TODO подумать, что делать с фокусом (стили. Сейчас проблема со скрытием)
export const Modal: FC<IModalProps> = ({onClose, children, isOpen, title, triggerRef}) => {
    const modalNode = document.getElementById('modal-root');

    const ref = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if(isOpen && closeRef.current) {
            closeRef.current?.focus();
            // closeRef.current.style.border = '1px solid blue';
        }
    }, [isOpen, closeRef]);

    const hadnleClose = useCallback(() => {
        onClose();

        if(triggerRef.current) {
            triggerRef.current?.focus();
            // triggerRef.current.style.border = '1px solid blue'; 
        }

    }, [onClose, triggerRef])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            event.stopPropagation();

            if (ref.current && !ref.current.contains(event.target as Node)) {
                hadnleClose()
            }

            // if(closeRef.current) closeRef.current.style.border = 'none';
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {
        const closeByEsc = ((event: KeyboardEvent) => {
          event.stopPropagation();

          if (event.key === 'Escape') {
            hadnleClose();
          }
        });

        document.addEventListener('keydown', closeByEsc);
        return () => document.removeEventListener('keydown', closeByEsc)
      }, []);

    if(!modalNode) return null;

    return ReactDOM.createPortal(
        <div className={cn(s.modal__overlay, {
            [s['modal__overlay--open']]: isOpen,
        })} onClick={onClose}>
            <div className={cn(s.modal__container, {
            [s['modal__container--open']]: isOpen,
        })} ref={ref} onClick={(e) => e.stopPropagation()}>
                <div className={s.modal__header}>
                    <h1 className={s.modal__title}>{title}</h1>
                    <button ref={closeRef} className={s.modal__close_icon} onClick={onClose}>x</button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>, 
        modalNode
    );
}