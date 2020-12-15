import React, { useState, useEffect, FC } from "react";

type TimerProps = {
  time: number;
};

const Timer: FC<TimerProps> = ({ time }) => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const makeTimeForm = (time: number): void => {
    if (time < 60) {
      setMin(0);
      setSec(time);
    } else {
      let min = Math.floor(time / 60);
      let sec = time - min * 60;
      setSec(sec);
      setMin(min);
    }
  };
  useEffect(() => {
    makeTimeForm(time);
  }, [time]);

  return (
    <div className='text-right'>
      <span className='time'>{min}</span>
      <span className='unit'>min</span>
      <span className='time right'>{sec}</span>
      <span className='unit'>sec</span>
    </div>
  );
};

export default Timer;
