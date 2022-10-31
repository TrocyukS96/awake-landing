import s from '/styles/anticheat.module.scss';
import Image from "next/image";
import {useState} from "react";

export default function AntiCheat({Component, pageProps}) {
    const [disable,setDisable] = useState(false)

    function downloadHandler(){
        setDisable(true)
        setTimeout(()=>{
            alert('началась установка')
            setDisable(false)
        },3000)
    }
    return (
        <div className={s.antiCheat}>
            <h1 className={s.title}>Античит</h1>
            <div className={s.content}>
                <div className={s.text}>
                    Awake Anticheat - наш собственный античит, который не позволит игроку использовать запрещённый софт.
                    Мы за честную игру!
                </div>
                <button disabled={disable} onClick={downloadHandler}>СКАЧАТЬ АНТИЧИТ</button>

                <div className={s.phones}>
                    <div className={s.leftPhone}>
                        <Image alt="phone image"  width={1354} height={760} src={'/static/anticheat-bg-left.png'} />
                        <div className={s.points}>
                            <Image width={948} height={536} src={'/static/leftPoints.png'} alt={'additional icon'}/>
                        </div>
                    </div>
                    <div className={s.rightPhone}>
                        <Image alt="phone image"  width={1397} height={786} src={'/static/anticheat-bg-right.png'} />
                        <div className={s.points}>
                            <Image width={948} height={536} src={'/static/rightPoints.png'} alt={'additional icon'}/>
                        </div>
                    </div>
                    <div className={s.ellipse}></div>
                    <svg width="1920" height="632" viewBox="0 0 1920 632" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2124.19 616.041C2040.41 464.134 1667.7 218.234 847.161 449.892C-178.514 739.464 -1270.38 932.255 -1681.84 339.033M2200.24 158.113C1885.08 168.615 1169.23 259 827.137 536.524C399.525 883.428 -950.919 1080.07 -1578.15 209.63M-1535.28 963.125C-1305.82 797.618 -691.089 481.387 -67.8681 540.521C711.158 614.44 1677.4 623.362 2231.66 1.34948" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
                    </svg>

                </div>

            </div>
        </div>
    )
}
