import React, { useState, useEffect } from 'react'
import './style.css'
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const toggle = (e: React.FormEvent) => {
        setIsActive(!isActive);
        e.preventDefault();
    }

    const reset = (e: React.FormEvent) => {
        setSeconds(0);
        setIsActive(false);
        e.preventDefault();
    }

    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);

        }
        return () => clearInterval(interval);
    }, [isActive, seconds]
    );

    return (
        <div className="Timer">
            <div className="row_timer">
                <div className="time">
                    {seconds}s
                </div>
                <button className="button_timer" onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button_timer" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer