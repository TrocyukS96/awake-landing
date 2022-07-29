import React from 'react';
import s from './index.module.scss';
import {PersonIcon} from "../icons/PersonIcon";
import {ProgressBar} from "../progressBar/progressBar";
import {DateBlock} from "../dateBlock/DateBlock";

export const Monitoring = () => {
    return (
        <div className={s.block}>
            <h2 className={s.title}><span>МОНИТОРИНГ</span></h2>
            <div className={s.countBlock}>
                <PersonIcon/> <span className={s.currentItem}>100</span>/<span className={s.resultItem}>1000</span>
                <ProgressBar/>
                <DateBlock/>

            </div>
        </div>
    );
};

