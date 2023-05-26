import React from 'react';

const DemoGame = () => {
  return (
    <div>
      <marquee behavior="scroll" direction="left" scrollamount="15">
        <h1 style={{ color: 'red', fontWeight: 'bold', fontSize: '2rem' }}>
          Game in Progress
        </h1>
      </marquee>
    </div>
  );
};

export default DemoGame;
