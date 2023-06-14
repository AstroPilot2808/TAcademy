import React, { useState, useEffect, useRef } from 'react';
import dawg from '../images/dog.jpg';
import cat from '../images/cat.jpg';

const DemoGame = () => {
  const [count, setCount] = useState(5);
  const [counter, setCounter] = useState(0);
  const [showGo, setShowGo] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [isImageClickable, setIsImageClickable] = useState(true);
  const [showMathProblem, setShowMathProblem] = useState(false);
  const [mathProblem, setMathProblem] = useState('');
  const [mathAnswer, setMathAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isMathProblemVisible, setIsMathProblemVisible] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const stopwatchRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setShowGo(true);
        startStopwatch();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleImageClick = (index) => {
    setCounter((prevCounter) => prevCounter + 1);
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
    setCurrentImage(null);
    setIsImageClickable(true);
  };

  const handleMathAnswerChange = (event) => {
    setMathAnswer(event.target.value);
  };

  const checkMathAnswer = (event) => {
    event.preventDefault();
    const parsedAnswer = parseFloat(mathAnswer);
    const correctAnswer = eval(mathProblem);

    if (!isNaN(parsedAnswer) && parsedAnswer === correctAnswer) {
      setIsAnswerCorrect(true);
      setMathAnswer('');
      setTimeout(() => {
        setShowMathProblem(false);
        setIsAnswerCorrect(false);
        setIsMathProblemVisible(false);
        setIsImageClickable(true);
        generateImage();
      }, 2000);
    } else {
      setMathAnswer('');
    }
  };

  useEffect(() => {
    if (showGo) {
      if (counter > 0 && counter % 5 === 0) {
        setShowMathProblem(true);
        setIsMathProblemVisible(true);
        setIsImageClickable(false);
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        const problem = `${num1} ${operator} ${num2}`;
        setMathProblem(problem);
      } else {
        setShowMathProblem(false);
        setIsImageClickable(true);
        generateImage();
      }
    }
  }, [showGo, counter]);

  useEffect(() => {
    if (showGo && !isMathProblemVisible && isImageClickable) {
      generateImage();
    }
  }, [showGo, isMathProblemVisible, isImageClickable]);

  const generateImage = () => {
    if (!currentImage) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const randomX = Math.random() * (windowWidth - 200);
      const randomY = Math.random() * (windowHeight - 200);
      const newImage = Math.random() < 0.5 ? dawg : cat;
      setCurrentImage(newImage);
      setImages((prevImages) => [
        ...prevImages,
        { x: randomX, y: randomY, image: newImage },
      ]);
    }
  };

  const startStopwatch = () => {
    stopwatchRef.current = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 10);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / (60 * 100));
    const seconds = Math.floor((time / 100) % 60);
    const milliseconds = Math.floor(time % 100);
    return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
  };

  const padTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  useEffect(() => {
    if (counter === 1) {
      clearInterval(stopwatchRef.current);
      setImages([]);
      setIsGameFinished(true);
    }
  }, [counter]);

  return (
    <>
      {count > 0 && <h1 className="text-center text-6xl">{count}</h1>}

      {showGo && <h1 className="text-center text-6xl">GO!</h1>}

      {showGo && (
        <div className="absolute top-0 right-0 mt-4 mr-4 text-2xl">
          {formatTime(elapsedTime)}
        </div>
      )}

      {showGo &&
        images.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt="Oops a problem"
            className="rounded-full w-60 h-60"
            style={{ position: 'absolute', top: image.y, left: image.x }}
            onClick={() => isImageClickable && handleImageClick(index)}
          />
        ))}

      {showGo && <p className="text-center text-4xl">Counter: {counter}</p>}

      {showMathProblem && (
        <div
          className={`flex flex-col items-center mt-8 ${isMathProblemVisible ? 'visible' : 'invisible'
            }`}
        >
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-xl mb-2">Solve the Math Problem:</p>
            <p className="text-2xl font-bold mb-4">{mathProblem}</p>
            <form onSubmit={checkMathAnswer}>
              <input
                type="text"
                value={mathAnswer}
                onChange={handleMathAnswerChange}
                className="border border-gray-400 p-2 rounded-md"
                placeholder="Enter your answer"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"
              >
                Submit
              </button>
            </form>
            {isAnswerCorrect && <p className="text-2xl mt-4">Correct!</p>}
          </div>
        </div>
      )}

      {isGameFinished && (
        <div className="flex flex-col items-center mt-8">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-xl mb-4">
              Congratulations! You have finished!
            </p>
            <p className="text-2xl font-bold mb-4">
              Your time: {formatTime(elapsedTime)}
            </p>
            <p className="text-xl mb-4">
              Please{' '}
              <span
                className="text-2xl font-bold mb-4 relative cursor-pointer"
                onClick={() => window.location.href = "https://tacademy.netlify.app/login"}
              >
                login
                <span className="underline-animation"></span>
              </span>{' '}
              or{' '}
              <span
                className="text-2xl font-bold mb-4 relative cursor-pointer"
                onClick={() => window.location.href = "https://tacademy.netlify.app/register"}
              >
                register
                <span className="underline-animation"></span>
              </span>{' '}
              to save your time on the leaderboard!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoGame;
