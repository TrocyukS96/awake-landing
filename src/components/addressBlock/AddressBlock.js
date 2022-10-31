import React from 'react';
import s from './index.module.scss';
import Clipboard from 'react-clipboard.js';

const textForCopy = '77.77.77.77:7777'

export const AddressBlock = () => {

   function onSuccessHandler(){
       alert('Текст скопирован в буфер обмена')
   }

    return (
        <div  className={s.wrapper} >
            <Clipboard className={s.clipboard}
                       data-clipboard-text={textForCopy}
                       onSuccess={onSuccessHandler}
            >
                <span>{textForCopy}</span>
            </Clipboard>
        </div >
    );
};

