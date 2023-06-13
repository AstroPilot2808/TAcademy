import React, { useState, useEffect } from 'react';
import dawg from '../images/dog.jpg';
import cat from '../images/cat.jpg';

const DemoGame = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [count]);

  const showImages = count <= 0; // Determine if the images should be shown

  return (
    <>
      {count > 0 && (
        <h1 className="text-center text-6xl">{count}</h1>
      )}

      {showImages && (
        <>
          <img
            src={dawg}
            alt="Oops a problem"
            className="rounded-full w-60 h-60 float-left"
            onClick={() => setCount(5)}
          />
          <img
            src={cat}
            alt="Oops a problem"
            className="rounded-full w-60 h-60 float-right"
            onClick={() => setCount(5)}
          />
        </>
      )}
    </>
  );
};

export default DemoGame;
