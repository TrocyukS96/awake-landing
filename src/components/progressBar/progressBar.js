import React, {useEffect, useRef, useState} from 'react';

import s from './index.module.scss';

export const ProgressBar = () => {

    const [progress, setProgress] = useState(18)

    const progressRef = useRef()

    const progressHandler = () => {
        progressRef.current.style.transform = `translateX(${progress}%)`;
    }

    useEffect(() => {
        progressHandler()
    }, [progress])

    return (
        <div className={s.container}>
            <div className={s.inner}>
                <div className={s.progressBar} ref={progressRef}>
                    <span className={s.text}></span>
                </div>
            </div>
        </div>
    );
};

