import React, {useState, useRef, useEffect} from 'react';
import dawg from '../images/dog.jpg';
import cat from '../images/cat.jpg';

const DemoGame = () => {
  const [count, setCount] = useState(0)
  const outputRef = useRef(null)

  const clickCounter = () => {
    setCount(count + 1)
  }

  useEffect(() =>{
    if (outputRef.current){
      outputRef.current.innerText = count;
    }
  }, [count])


  return (
    <>
    <div>
      <marquee behavior="scroll" direction="left" scrollamount="15">
        <h1 style={{ color: 'red', fontWeight: 'bold', fontSize: '2rem' }}>
          Game in Progress
        </h1>
      </marquee>
    </div>
    <h1 ref={outputRef} className='text-center text-6xl'></h1>
    
    <img src={dawg} alt="Oops a problem" className="rounded-full w-60 h-60 float-left" onclick={clickCounter()} />
    <img src={cat} alt="Oops a problem" className="rounded-full w-60 h-60 float-right" />
    
    </>
  );
};

export default DemoGame;