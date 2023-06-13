import React, { useState, useEffect } from 'react';
import dawg from '../images/dog.jpg';
import cat from '../images/cat.jpg';

const DemoGame = () => {
  const [count, setCount] = useState(5);
  const [showImages, setShowImages] = useState(false);
  const [counter, setCounter] = useState(0);
  const [showGo, setShowGo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setShowImages(true);
        setShowGo(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleImageClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      {count > 0 && (
        <h1 className="text-center text-6xl">{count}</h1>
      )}

      {showGo && (
        <h1 className="text-center text-6xl">GO!</h1>
      )}

      {showImages && (
        <>
          <img
            src={dawg}
            alt="Oops a problem"
            className="rounded-full w-60 h-60 float-left"
            onClick={handleImageClick}
          />
          <img
            src={cat}
            alt="Oops a problem"
            className="rounded-full w-60 h-60 float-right"
            onClick={handleImageClick}
          />
        </>
      )}

      {showImages && (
        <p className="text-center text-4xl">Counter: {counter}</p>
      )}
    </>
  );
};

export default DemoGame;
