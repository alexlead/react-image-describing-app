import React, { useEffect, useRef, useState } from 'react';


interface ITimerProps {
}

const Timer: React.FunctionComponent<ITimerProps> = () => {

    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(0);

    const intervalRef = useRef<number | null>(null);

    const startTimer = () => {
        if (timeLeft > 0 && !isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 0) {
                        clearInterval(intervalRef.current!);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };


    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    };

    const handleMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
        if ( isNaN (parseInt(e.target.value, 10)) ) {
            setMinutes(0)
        } else {
            if( parseInt(e.target.value, 10) < 60 ) {
                setMinutes(parseInt(e.target.value, 10))
            } else {
                setMinutes(60)
            }
        }
    }
    const handleSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
        if ( isNaN (parseInt(e.target.value, 10)) ) {
            setSeconds(0)
        } else {
            if( parseInt(e.target.value, 10) < 60 ) {
                setSeconds(parseInt(e.target.value, 10))
            } else {
                setSeconds(59)
            }
        }
    }

    const resetTimer = () => {
        stopTimer();
        setTimeLeft(minutes * 60 + seconds);
        setIsRunning(false);
    };


    useEffect(() => {
        setTimeLeft(minutes * 60 + seconds);
    }, [minutes, seconds]);


    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const formatTime = (time: number): string => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    return (
        <>
            <div className='mt-2 text-center'>
                <h2>TIMER</h2>
                <div  className='m-3 fs-1 text-bg-danger'>
                    {formatTime(timeLeft)}
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="form-floating me-2">
                            <input
                                type="number"
                                className='form-control'
                                value={minutes}
                                onChange={handleMinutes}
                                min="0"
                                max="59"
                                disabled={isRunning}
                            />
                            <label className="form-label">
                                Minutes:
                        </label>
                    </div>
                    <div className="form-floating">
                            <input
                                type="number"
                                className='form-control ms-2'
                                value={seconds}
                                onChange={handleSeconds}
                                min="0"
                                max="59"
                                disabled={isRunning}
                            />
                        <label className="form-label">
                            Seconds:
                        </label>
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type="button" className="btn btn-primary btn-lg" onClick={startTimer} disabled={isRunning || timeLeft <= 0}>
                        Start
                    </button>
                    <button type="button" className="btn btn-primary btn-lg ms-2" onClick={stopTimer} disabled={!isRunning} >
                        Stop
                    </button>
                    <button type="button" className="btn btn-primary btn-lg ms-2" onClick={resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
}
export default Timer;