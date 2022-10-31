import s from "../styles/donation.module.scss";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Modal} from "../src/components/modal/Modal";
import {DonateInfo} from "../src/components/donateInfo/DonateInfo";
import {DonationServicesList} from "../src/components/donationServicesList/DonationServicesList";

export default function AntiCheat({Component, pageProps}) {

    const [openModal, setOpenModal] = useState(false)
    const [openDonationServicesModal, setOpenDonationServicesModal] = useState(false)
    const [disable,setDisable] = useState(false)
    const [error,setError] = useState('')

    const [donateInfo, setDonateInfo] = useState({
        nikName: '',
        desiredAmount: 100,
        scoreNumber: '# 703099143',
        resultSum: 200
    })

    function convertHandler(){
        if(donateInfo.nikName.length>20 || donateInfo.nikName.length<3){
            setError('должно быть от 3 до 20 символов')
        }else{
            setError('')
            setOpenModal(true)
        }

    }
    function setValueHandler(value){
            setDonateInfo({...donateInfo, desiredAmount: value})
        setError('')


    }
    useEffect(()=>{setError('')},[donateInfo.nikName])

    function donationServicesHandler() {
        setOpenDonationServicesModal(true)
    }

    return (
        <div className={s.donation}>
            <h1 className={s.title}>
                <span>ВАШЕ ПРЕИМУЩЕСТВО </span>
                В ПАРУ КЛИКОВ
            </h1>
            <div className={s.content}>
                <div className={s.text}>
                    ТРЕБУЕТСЯ БЫСТРАЯ ПРОКАЧКА?<br/>
                    ХОТИТЕ ПРИОБРЕСТИ НАШИ ПЛАТНЫЕ УСЛУГИ?
                    ОБМЕНЯЙТЕ РЕАЛЬНЫЕ ДЕНЬГИ И ПОЛУЧИТЕ
                    ТО, О ЧЁМ ТАК ДАВНО МЕЧТАЛИ!
                </div>
                <div className={s.inputsBlock}>
                    <div className={s.inputWrap}>
                        <span className={s.label}>Укажите свой никнейм</span>
                        <input type="text"
                               onChange={(e) => setDonateInfo({...donateInfo, nikName: e.currentTarget.value})}
                               value={donateInfo.nikName}
                        placeholder={'Stanley_Parker'}
                        />
                        <div className={s.iconWrap}>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 6.26834C10 7.52773 8.94118 8.55814 7.64706 8.55814C6.35294 8.55814 5.29412 7.52773 5.29412 6.26834V3.97853C5.29412 2.71914 6.35294 1.68873 7.64706 1.68873C8.94118 1.68873 10 2.71914 10 3.97853V6.26834ZM15 12.6225C14.6471 11.6494 13.9706 10.7621 13.0294 10.161L12.9412 10.1324C12.2353 9.67442 11.4412 9.30233 10.6176 9.04472C11.3529 8.30054 11.7647 7.32737 11.7647 6.29696V4.00716C11.7647 1.80322 9.91177 0 7.64706 0C5.38235 0 3.52941 1.80322 3.52941 4.00716V6.29696C3.52941 7.32737 3.94118 8.30054 4.67647 9.04472C3.85294 9.30233 3.08824 9.67442 2.35294 10.1324L2.26471 10.1896C0.852941 11.1055 0 12.6225 0 14.2826V16H11.9118C11.8235 15.7424 11.7647 15.4562 11.7647 15.1413C11.7647 14.8265 11.8235 14.5403 11.9118 14.2826H1.76471C1.76471 13.195 2.32353 12.1932 3.23529 11.6208L3.32353 11.5635C5.94118 9.87478 9.32353 9.87478 11.9412 11.5635L12.0588 11.6208C12.5588 11.9356 12.9412 12.3649 13.1765 12.8801C13.5294 12.6798 13.9706 12.5939 14.4118 12.5939C14.6176 12.5653 14.8235 12.5939 15 12.6225Z"
                                    fill="white" fillOpacity="0.5"/>
                            </svg>
                        </div>
                        {error.length>0 ? <div className={s.error}>{error}</div>:''}
                    </div>

                    <div className={s.inputWrap}>
                        <span className={s.label}>Укажите желаемую сумму</span>
                        <input type="number"
                               onChange={(e) => setValueHandler(e.currentTarget.value)}
                               value={donateInfo.desiredAmount}/>
                        <div className={s.iconWrap}>
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.80391 15V0.719999H6.36391C8.20391 0.719999 9.54391 1.09333 10.3839 1.84C11.2372 2.58667 11.6639 3.61333 11.6639 4.92C11.6639 5.69333 11.4906 6.42 11.1439 7.1C10.7972 7.78 10.2172 8.32667 9.40391 8.74C8.60391 9.15333 7.51057 9.36 6.12391 9.36H4.82391V15H1.80391ZM0.203906 12.86V10.92H7.90391V12.86H0.203906ZM0.203906 9.36V6.88H6.06391V9.36H0.203906ZM5.82391 6.88C6.39724 6.88 6.89057 6.82 7.30391 6.7C7.71724 6.56667 8.03724 6.36 8.26391 6.08C8.49057 5.8 8.60391 5.44667 8.60391 5.02C8.60391 4.40667 8.41057 3.95333 8.02391 3.66C7.63724 3.35333 7.03057 3.2 6.20391 3.2H4.82391V6.88H5.82391Z"
                                    fill="white" fillOpacity="0.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className={s.inputWrap}>
                        <span className={s.label}>Получите в игре</span>
                        <div className={s.desiredAmountBlock}><span>{donateInfo.desiredAmount * 2}</span></div>
                        <div className={s.iconWrap}>
                            DM
                        </div>
                    </div>
                    <button className={s.infoBtn} onClick={donationServicesHandler}>ИНФОРМАЦИЯ О ДОНАТЕ</button>
                    <button  className={s.convertBtn} onClick={convertHandler} >КОНВЕРТИРОВАТЬ</button>


                </div>
                <div className={s.phones}>
                    <div className={s.leftPhone}>
                        <Image alt="phone image" width={945} height={555} src={'/static/donat-bg-left.png'}/>
                        <div className={s.points}>
                            <Image width={948} height={536} src={'/static/install-rightPoints.png'}
                                   alt={'additional icon'}/>
                        </div>
                    </div>
                    <div className={s.rightPhone}>.
                        <Image alt="phone image" width={772} height={572} src={'/static/donat-bg-right.png'}/>
                    </div>

                    <div className={s.ellipse}></div>

                    <div className={s.waveWrap}>
                        <Image src={'/static/donation-wave.png'} width={3923} height={893}/>
                    </div>
                </div>
            </div>

            <Modal active={openModal} setActive={setOpenModal}>
                <DonateInfo donateInfo={donateInfo} />
            </Modal>
            <Modal active={openDonationServicesModal} setActive={setOpenDonationServicesModal}>
                <DonationServicesList/>
            </Modal>
        </div>
    )
}