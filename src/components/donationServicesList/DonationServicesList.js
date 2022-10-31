import React from 'react';
import s from './index.module.scss';
import {donationServiceslist} from "../../utils/donationServiceslist";
import SimpleBar from 'simplebar-react';

import {DonationListItem} from "../donationListItem/DonationListItem";

export const DonationServicesList = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <h5>Список донат услуг</h5>
                <span>Перечень всех услуг, что Вы можете приобрести.</span>
            </div>
            <div className={s.content}>
                <SimpleBar  className={s.list} style={{maxHeight: 324}} autoHide={false} >
                    {donationServiceslist.map((service,i)=>{
                        return(
                            <DonationListItem
                                description={service.description}
                                currency={service.amount.currency}
                                number={service.amount.number}
                                key={i}
                                order={i+1}
                            />
                        )
                    })}
                </SimpleBar>
            </div>
        </div>
    );
};

