import React, {useEffect, useState} from 'react';
import s from './index.module.scss';
import Image from "next/image";
import {useRouter} from "next/router";

export const DonateInfo = ({donateInfo}) => {
    const router = useRouter()
    const [checkedValue, setCheckedValue] = useState(false)
    const [focused, setFocused] = useState('no focus')
    const [error,setError] = useState('')
    const {nikName, desiredAmount, scoreNumber} = donateInfo

    const onChangeHandler = (e) => {
        setCheckedValue(!checkedValue)

        if (focused !== 'no focus' && e.currentTarget.checked) {
            setError('')
            router.push('https://www.google.com/')
        }
        if(focused==='no focus'){
            e.currentTarget.checked = false
            setError('Выберите платежную систему')
        }

    }


    useEffect(()=>{
        if(focused!=='no focus'){
            setError('')
        }
    },[focused])
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <h5>Проверка данных</h5>
                <span>Проверьте свои данные перед оплатой</span>
            </div>
            <div className={s.requisits}>
                <div className={s.item}>
                    <span>Номер счёта</span>
                    <span>{scoreNumber}</span>
                </div>
                <div className={s.item}>
                    <span>Ник-нейм</span>
                    <span>{nikName}</span>
                </div>
                <div className={s.item}>
                    <span>Сумма</span>
                    <span>{desiredAmount} ₽ </span>
                </div>
            </div>
            <div className={s.paymentSystem}>
                <h6>Выберите удобную для вас
                    платёжную систему</h6>
                <div className={s.paymentSystemItems}>
                    <div onClick={() => {
                        setFocused('focus1')
                    }} className={s.paymentItem} style={focused === 'focus1' ? {borderColor: '#F5C463'} : {}}>
                        <Image src={'/static/paymentItem1.png'} width={98} height={28} alt={'payment logo icon'}/>
                    </div>
                    <div onClick={() => {
                        setFocused('focus2')
                    }} className={s.paymentItem} style={focused === 'focus2' ? {borderColor: '#F5C463'} : {}}>
                        <Image src={'/static/paymentItem2.png'} width={98} height={20} alt={'payment logo icon'}/>
                    </div>
                    <div onClick={() => {
                        setFocused('focus3')
                    }} className={s.paymentItem} style={focused === 'focus3' ? {borderColor: '#F5C463'} : {}}>
                        <Image src={'/static/paymentItem3.png'} width={86} height={27} alt={'payment logo icon'}/>
                    </div>
                    <div onClick={() => {
                        setFocused('focus4')
                    }} className={s.paymentItem} style={focused === 'focus4' ? {borderColor: '#F5C463'} : {}}>
                        <Image src={'/static/paymentItem4.png'} width={76} height={33} alt={'payment logo icon'}/>
                    </div>

                </div>
                <div className={s.error}>{error.length>0 ? error : ''}</div>
            </div>
            <div className={s.agreement}>
                <input type="checkbox" id={'checkbox1'} onChange={onChangeHandler}
                       value={checkedValue} name={'checkbox1'}/>
                <label htmlFor="checkbox1"></label>
                <p>Продолжая покупку, вы соглашаетесь с пользовательским соглашением</p>
            </div>

        </div>

    )
        ;
};



