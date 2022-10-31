import React from 'react';
import s from './index.module.scss';
export const DonationListItem = ({description,number,currency,order}) => {
    return (
        <div className={s.item}>
            <div className={s.column}>
                <span className={s.orderNumber}>{`${order}.`}</span>
                <span className={s.description}>{description}</span>
            </div>
            <div className={s.column}>
                <span className={s.amount}>{number}</span>
                <span className={s.currency}>{currency}</span>
            </div>

        </div>
    );
};

