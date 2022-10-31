import React, {useEffect, useState} from 'react';
import s from './index.module.scss';
import {PersonIcon} from "../icons/PersonIcon";
import {ProgressBar} from "../progressBar/progressBar";
import {AddressBlock} from "../addressBlock/AddressBlock";

//оставил пока как заглушку
const initialCurrentItem = 100
const initialResultItem = 1000

export const Monitoring = () => {
    const [currentItem,setCurrentItem] = useState(null)
    const [resultItem,setResultItem] = useState(null)

    useEffect(()=>{
        setCurrentItem(initialCurrentItem)
        setResultItem(initialResultItem)
            //Todo поменять зависимости под бэк
    },[])

    return (
        <div className={s.block}>
            <h2 className={s.title}><span>МОНИТОРИНГ</span></h2>
            <div className={s.countBlock}>
                <PersonIcon className={s.icon}/> <span className={s.currentItem}>{currentItem}</span>/<span className={s.resultItem}>{resultItem}</span>
                <ProgressBar/>
                <AddressBlock/>

            </div>
        </div>
    );
};

