import React, { useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import logoImage from '../images/download.jpg';
import headImage from '../images/images.jpg';
import ajayImage from '../images/ajay.png';

const LandingPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    navigate('/demo-game');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxV0ubfhgcjQAS4WgrLIg_3VJ-URecy_PwbH3vKQjdnYiisL7jSR64dhX4WJWzaVTvm/exec';
    const form = e.target;

    try {
      const formData = new FormData(form);
      await fetch(scriptURL, { method: 'POST', body: formData });
      form.reset();
      setMessage('Message sent successfully');
      setTimeout(() => {
        setMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500">
      <header>
        <nav className="container mx-auto py-4 flex items-center justify-between">
          <img src={logoImage} alt="Display TAcademy Logo" className="h-20" />
          <ul className="flex justify-end space-x-8">
            <li className="pt-2">
              <Link
                to="home"
                className="text-gray-800 cursor-pointer text-lg hover-underline-animation"
                smooth={true}
                duration={500}
                onClick={scrollToTop}
              >
                Home
              </Link>
            </li>
            <li className="pt-2 pl-2">
              <Link
                to="about"
                className="text-gray-800 cursor-pointer text-lg hover-underline-animation"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="pt-2 pl-2">
              <Link
                to="contact"
                className="text-gray-800 cursor-pointer text-lg hover-underline-animation"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Element name="home" className="py-16">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2 pr-8">
            <h1 className="text-4xl font-bold text-blue-600 text-left">Welcome to TAcademy</h1>
            <p className="mt-4 mb-8 text-blue-800 text-left">
              TAcademy is an educational website dedicated to providing quality learning resources and courses for
              students of all levels. With interactive games, we make learning fun for all ages!
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300">
                Login
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300">
                Register
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300"
                onClick={handleButtonClick}
              >
                Play Our DEMO Game
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src={headImage} alt="Image" className="w-full" />
          </div>
        </div>
      </Element>

      <Element name="about" className="py-16">
        <div className="container mx-auto text-center overflow-hidden px-8">
          <h2 className="text-5xl font-bold text-blue-800 mb-8">About Us</h2>
          <div className="flex justify-center">
            <div className="w-1/2">
              <img src={ajayImage} alt="Person 1" className="rounded-full h-64 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Ajay Ohm Nathan</h3>
              <div className="border-4 border-black rounded-lg bg-transparent p-4 mb-8 mr-5">
                <p className="text-black italic">
                  "My name is Ajay Ohm Nathan. I am 17 years old and have always loved coding. I also have a deep
                  passion for education. Education grows when shared. Together with my good friend, Tanishq Bansod, we
                  have created an educational website so students can learn and have fun at the same time."
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <img src={headImage} alt="Person 2" className="rounded-full h-64 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">Tanishq Bansod</h3>
              <div className="border-4 border-black rounded-lg bg-transparent p-4 ml-5">
                <p className="text-black italic">"Sample Description"</p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="contact" className="py-16">
  <div className="container mx-auto flex justify-center">
    <div className="w-1/3">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div>
        <p>Email: ajayohm28@gmail.com</p>
        <p>Phone: (412)-587-2795</p>
        <p>Snapchat: @ajayo2005</p>
        <a href="https://github.com/AstroPilot2808" target="_blank" rel="noopener noreferrer">
          <p>Github: @AstroPilot2808</p>
        </a>
      </div>
    </div>
    <div className="w-1/3">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <input type="text" name="Name" placeholder="Your Name" required className="mb-4 p-2 border border-gray-300" />
        <input type="email" name="Email" placeholder="Your Email" required className="mb-4 p-2 border border-gray-300" />
        <textarea name="Message" rows="6" placeholder="Your Message" className="mb-4 p-2 border border-gray-300"></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300">
          Submit
        </button>
        <span id="msg">{message}</span>
      </form>
    </div>
    <div className="w-1/3">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div>
        <p>Email: ajayohm28@gmail.com</p>
        <p>Phone: (412)-587-2795</p>
        <p>Snapchat: @ajayo2005</p>
        <a href="https://github.com/AstroPilot2808" target="_blank" rel="noopener noreferrer">
          <p>Github: @AstroPilot2808</p>
        </a>
      </div>
    </div>
  </div>
  <div className="text-center mt-8">
    <p>&copy; {new Date().getFullYear()} YourWebsite.com. All rights reserved.</p>
  </div>
</Element>


    </div>
  );
};

export default LandingPage;
