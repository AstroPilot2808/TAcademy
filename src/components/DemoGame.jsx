import React from 'react';
import dawg from '../images/dog.jpg';
import cat from '../images/cat.jpg';

var count = 0;
var output = document.getElementById('out');
function clickCounter()
{
    count+=1;
    output.innerText = count;
}


const DemoGame = () => {
  return (
    <>
    <div>
      <marquee behavior="scroll" direction="left" scrollamount="15">
        <h1 style={{ color: 'red', fontWeight: 'bold', fontSize: '2rem' }}>
          Game in Progress
        </h1>
      </marquee>
    </div>
    <h1 id="out" className='text-center text-6xl'>0</h1>
    
    <img src={dawg} alt="Oops a problem" className="rounded-full w-60 h-60 float-left" onClick={clickCounter()} />
    <img src={cat} alt="Oops a problem" className="rounded-full w-60 h-60 float-right" />
    
    </>
  );
};

export default DemoGame;
