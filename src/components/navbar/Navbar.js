import s from './index.module.scss';
import {useState} from "react";
export const Navbar = () => {
    return (
        <ul className={s.list}>
            <li className={s.item} onClick={()=>{}}>ГЛАВНАЯ</li>
            <li className={`${s.item} ${s.activeItem}`} onClick={()=>{}}>АНТИЧИТ</li>
            <li className={s.item} onClick={()=>{}}>СБОРКА GTA</li>
            <li className={s.item} onClick={()=>{}}>ДОНАТ</li>
            <li className={s.item} onClick={()=>{}}>ДИСКОРД</li>
        </ul>
    )
}