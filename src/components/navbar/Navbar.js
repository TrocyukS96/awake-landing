import s from './index.module.scss';
import {motion} from 'framer-motion';
import {useRouter} from "next/router";

const routs = [
    {name: 'ГЛАВНАЯ', path: '/'},
    {name: 'АНТИЧИТ', path: '/antiCheat'},
    {name: 'СБОРКА GTA', path: '/installation'},
    {name: 'ДОНАТ', path: '/donation'},
    {name: 'ДИСКОРД', path: 'https://discord.gg/dpfYpf2'},
]

export const Navbar = () => {
    const router = useRouter()

    return (
        <div className={s.wrapper}>
            <ul className={s.list}>
                {routs.map((route, index) => {
                    return <motion.li  key={index} className={router.pathname === route.path
                        ? ` ${s.item} ${s.activeItem}` : s.item} onClick={()=>router.push(route.path)}>{route.name}
                    </motion.li>
                })}
            </ul>
        </div>
    )
}