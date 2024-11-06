import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setSeconds(0);
        setIsActive(false);
    };

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const displaySeconds = seconds % 60;

    return (
        <div className = "container">
            <h1>
                Timer: {String(hours).padStart(2, '0')}:
                {String(minutes).padStart(2, '0')}:
                {String(displaySeconds).padStart(2, '0')}
            </h1>
            <button onClick={handleStart} disabled={isActive}>Start</button>
            <button onClick={handleStop} disabled={!isActive}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}


export default Timer;
