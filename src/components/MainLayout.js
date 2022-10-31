import s from '../../styles/MainLayout.module.scss';
import {Logo} from "./logo/Logo";
import {Navbar} from "./navbar/Navbar";
import Image from "next/image";


export default function MainLayout({children}) {
    return (

        <div className={s.wrapper}>
            <header>
                <Logo/>
                <Navbar/>
            </header>
            <main>{children}</main>
        <div className={s.phone}>
            <Image src="/static/mainPhone.png" alt="main phone" layout={"fill"}/>
        </div>
        </div>
    )
}