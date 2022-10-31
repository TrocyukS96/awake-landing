import React from 'react';
import s from './index.module.scss';

export const Modal = ({active, setActive, children,style}) => {

    return (
        <div className={active ? `${s.modal} ${s.modalActive}` : s.modal}
             style={style ? style : null}
             onClick={() => setActive(false)}
        >
            <div className={active ? `${s.content} ${s.contentActive}` : s.content} onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

