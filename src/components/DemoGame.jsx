import React, { useState, useEffect } from 'react';
import dawg from '../images/dog.jpg';
import cat from '../images/cat.jpg';

const DemoGame = () => {
  const [count, setCount] = useState(5);
  const [counter, setCounter] = useState(0);
  const [showGo, setShowGo] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(dawg);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setShowGo(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleImageClick = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      setCounter((prevCounter) => prevCounter + 1);
      return newImages;
    });
  };

  useEffect(() => {
    if (!showGo) {
      return;
    }

    const generateImage = setInterval(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const randomX = Math.random() * (windowWidth - 200);
      const randomY = Math.random() * (windowHeight - 200);
      const newImage = currentImage === dawg ? cat : dawg;
      setImages((prevImages) => [...prevImages, { x: randomX, y: randomY, image: newImage }]);
      setCurrentImage(newImage);
    }, 1000);

    return () => clearInterval(generateImage);
  }, [showGo, currentImage]);

  return (
    <>
      {count > 0 && (
        <h1 className="text-center text-6xl">{count}</h1>
      )}

      {showGo && (
        <h1 className="text-center text-6xl">GO!</h1>
      )}

      {showGo && images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          alt="Oops a problem"
          className="rounded-full w-60 h-60"
          style={{ position: 'absolute', top: image.y, left: image.x }}
          onClick={() => handleImageClick(index)}
        />
      ))}

      {showGo && (
        <p className="text-center text-4xl">Counter: {counter}</p>
      )}
    </>
  );
};

export default DemoGame;
