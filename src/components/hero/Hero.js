import React, {useEffect, useState} from 'react';
import s from './index.module.scss';
import {Monitoring} from "../monitoring/Monitoring";
import {SocialBlock} from "../socialBlock/SocialBlock";
import {Cycle} from "../icons/Cycle";
import Image from "next/image";

export const Hero = () => {
    const [circleLeftState,setCircleLeftState] = useState('0.06')
    const [circleRightState,setCircleRightState] = useState('0.06')

    const [screenWidth,setScreenWidth] = useState(0)
    const [screenHeight,setScreenHeight] = useState(0)

    const [sideActive,setSideActive] = useState('')

    useEffect(()=>{
        setCircleLeftState('0.06')
        setCircleRightState('0.06')

        setScreenHeight(window.screen.availHeight)
        setScreenWidth(window.screen.availWidth)
    },[])

    const leftPhoneHideHandler = (e) =>{
        e.currentTarget.style.filter = 'saturate(0%) brightness(29%)'
        setCircleLeftState('0.06')
    }
    const leftPhoneShowHandler = (e)=>{
        e.currentTarget.style.filter = 'saturate(100%) brightness(100%)'
        setCircleLeftState('0.3')
    }

    const rightPhoneHideHandler = (e) =>{
        e.currentTarget.style.filter = 'saturate(0%) brightness(29%)'
        setCircleRightState('0.06')
    }
    const rightPhoneShowHandler = (e)=>{
        e.currentTarget.style.filter = 'saturate(100%) brightness(100%)'
        setCircleRightState('0.3')
    }

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
            <div className={s.phones}>
                <div className={s.leftPhone}
                     onTouchStart={(e)=>{
                         if(screenWidth<=730){
                             leftPhoneShowHandler(e)
                             setSideActive('left')
                         }
                     }}

                    onMouseEnter={(e)=>{
                        if(screenWidth>730){
                            leftPhoneShowHandler(e)
                        }
                    }}
                     onMouseLeave={(e)=>{
                         if(screenWidth>730){
                             leftPhoneHideHandler(e)
                         }
                     }}

                     style={sideActive==='left' ? {filter:'saturate(100%) brightness(100%)'}:{filter:'saturate(0%) brightness(29%)'}}
                    >
                    <Image alt="phone image" src="/static/hero-bg-left.png" width={674} height={727}
                    />
                    <Cycle classname={s.cycle}
                           fillOpacity={circleLeftState}

                    />
                    <div className={s.ellipse1}
                    ></div>
                    <div className={s.ellipse2}
                    ></div>
                </div>
                <div className={s.rightPhone}
                     onTouchStart={(e)=>{
                         if(screenWidth<=730){
                             rightPhoneShowHandler(e)
                             setSideActive('right')
                         }
                     }}
                     onMouseEnter={(e)=>{
                         if(screenWidth>730){
                          rightPhoneShowHandler(e)
                         }

                     }}
                     onMouseLeave={(e)=>{
                         if(screenWidth>730){
                            rightPhoneHideHandler(e)
                         }

                     }}
                     style={sideActive==='right' ? {filter:'saturate(100%) brightness(100%)'}:{filter:'saturate(0%) brightness(29%)'}}
                >
                    <Image alt="phone image" src="/static/hero-bg-right.png" width={674} height={658}
                    />
                    <Cycle classname={s.cycle}
                           fillOpacity={circleRightState}
                    />
                    <div className={s.ellipse1}

                    ></div>
                    <div className={s.ellipse2}

                    ></div>
                </div>

            </div>


        </div>
    );
};

