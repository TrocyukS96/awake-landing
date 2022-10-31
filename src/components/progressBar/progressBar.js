import React, {useEffect, useRef, useState} from 'react';
import s from './index.module.scss';

export const ProgressBar = () => {

    const [progress] = useState(25)
    const progressRef = useRef()
    const progressHandler = () => {
        progressRef.current.style.transform = `translateX(${progress}%)`;
    }

    useEffect(() => {
        progressHandler()
    }, [progressHandler])

    return (
        <div className={s.container}>
            <div className={s.inner}>
                <div className={s.progressBar} ref={progressRef}>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

