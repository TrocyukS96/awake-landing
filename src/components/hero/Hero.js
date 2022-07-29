import React, {useState} from 'react';
import s from './index.module.scss';
import {Monitoring} from "../monitoring/Monitoring";
import {SocialBlock} from "../socialBlock/SocialBlock";
import {Cycle} from "../icons/Cycle";

export const Hero = () => {
    const [leftActive, setLeftActive] = useState(true)
    const [rightActive, setRightActive] = useState(true)
    const leftPhoneHandler = () => {
        setLeftActive(true)
        setRightActive(false)
    }
    const rightPhoneHandler = () => {
        setRightActive(true)
        setLeftActive(false)
    }

    const switchedColor = (color, value) => value ? {backgroundColor: color} : {backgroundColor: 'rgba(186,186,186,48%)'}

    return (
        <div className={s.main}>
            <h1 className={s.title}>
                Проект, который заставит тебя вернуться в <span>легендарный SAMP</span>
            </h1>
            <div className={s.textContent}>
                <p>Мы собрали всё, как вы любите!</p>
                <p> Все режимы игры – только у нас.</p>
                <p>
                    Устраивайте турниры, PvP с другими игроками! Играйте на DeathMatch аренах. <br/>
                    Участвуйте в войнах между игроками! <br/>
                    Вы можете приобретать дома/авто/вертолёты. <br/>
                    Собственные базы для своего клана. <br/>
                    Новые банды, новые капты – всё здесь! <br/>
                    У нас меньше всего читеров, ведь наш античит – лучший на данный момент из всех, что есть.
                </p>
            </div>
            <Monitoring/>
            <SocialBlock/>
            <div className={s.leftPhone} onClick={leftPhoneHandler}
                 style={!leftActive ? {filter:'brightness(29%)'} : {}}>
                <img alt="phone image" src="./static/hero-bg-left.png"
                     style={!leftActive ? {filter: 'saturate(0%)'} : {}}/>
                <Cycle classname={s.cycle} fillOpacity={leftActive ? '0.3' : '0.06'}/>
                <div className={s.ellipse1} style={switchedColor('#607449', leftActive)}></div>
                <div className={s.ellipse2} style={switchedColor('#607449', leftActive)}></div>
            </div>
            <div className={s.rightPhone} onClick={rightPhoneHandler}
                 style={!rightActive ? {filter:'brightness(29%)'} : {}}>
                <img alt="phone image" src="./static/hero-bg-right.png"
                     style={!rightActive ? {filter: 'saturate(0%)'} : {}}/>
                <Cycle classname={s.cycle} fillOpacity={rightActive ? '0.3' : '0.06'}/>
                <div className={s.ellipse1} style={switchedColor('#AA4794', rightActive)}></div>
                <div className={s.ellipse2} style={switchedColor('#AA4794', rightActive)}></div>
            </div>

        </div>
    );
};

