import React, { useState, useRef, useEffect } from 'react';
import dawg from '../images/dog.jpg';
import cat from '../images/cat.jpg';
import CountDown from './Countdown';

const DemoGame = () => {
  const [count, setCount] = useState(0);
  const outputRef = useRef(null);

  const clickCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.innerText = count;
    }
  }, [count]);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 ref={outputRef} className="text-center text-6xl"></h1>

      <img
        src={dawg}
        alt="Oops a problem"
        className="rounded-full w-60 h-60 float-left"
        onClick={clickCounter}
      />
      <img
        src={cat}
        alt="Oops a problem"
        className="rounded-full w-60 h-60 float-right"
        onClick={clickCounter}
      />


      <CountDown />

    </>
  );
};

export default DemoGame;
