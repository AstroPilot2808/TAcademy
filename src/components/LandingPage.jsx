import React, { useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import logoImage from '../images/download.jpg';
import headImage from '../images/images.jpg';
import ajayImage from '../images/ajay.png';
import TQImage from '../images/TQ.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';

const LandingPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const demoButtonClick = () => {
    navigate('/demo-game');
  };

  const loginButtonClick = () => {
    navigate('/login');
  };

  const registerButtonClick = () => {
    navigate('/register')
  }

  const homeClick = () => {
    navigate('/')
  }


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

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500">
      <header>
        <nav className="container mx-auto py-4 flex items-center justify-between">
          <img onClick={homeClick} src={logoImage} alt="Display TAcademy Logo" className="h-20 shadow-2xl" />
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
            <li className="pt-2">
              <Link
                onClick={loginButtonClick}
                className="text-gray-800 cursor-pointer text-lg hover-underline-animation"
              >
                Login
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
              <button onClick={loginButtonClick} className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300">
                Login
              </button>
              <button onClick={registerButtonClick} className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300">
                Register
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300"
                onClick={demoButtonClick}
              >
                Play Our DEMO Game
              </button>
            </div>
          </div>
          <div className="w-1/2 shadow-2xl">
            <img src={headImage} alt="" className="w-full" />
          </div>
        </div>
      </Element>

      <Element name="about" className="py-16">
        <div className="container mx-auto text-center overflow-hidden px-8">
          <h2 className="text-5xl font-bold text-blue-800 mb-8">About Us</h2>
          <div className="flex justify-center">
            <div className="w-1/2">
              <img src={ajayImage} alt="Person 1" className="rounded-full h-64 mx-auto mb-4 shadow-2xl" />
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
              <img src={TQImage} alt="Person 2" className="rounded-full h-64 mx-auto mb-4 shadow-2xl" />
              <h3 className="text-3xl font-bold mb-2">Tanishq Bansod</h3>
              <div className="border-4 border-black rounded-lg bg-transparent p-4 ml-5">
                <p className="text-black italic">
                  "My name is Tanishq D Bansod. I am 16 years old just like my partner here, I also have loved coding from
                  my childhood. As a kid, I would always like to learn new things and I always loved the idea of making
                  games for people because I love gaming myself. This site combines both of these passions and brings them
                  to students in order to learn and have fun while doing it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="contact" className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-center pl-10">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-6">Contact Ajay</h1>
            <div className="space-y-2">
              <p className="text-lg">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                ajayohm28@gmail.com
              </p>
              <p className="text-lg">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (412)-587-2795
              </p>
              <p className="text-lg">
                <FontAwesomeIcon icon={faSnapchatGhost} className="mr-2" />
                @ajayo2005
              </p>
              <a href="https://github.com/AstroPilot2808" target="_blank" rel="noopener noreferrer">
                <p className="text-lg pt-3">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  @AstroPilot2808
                </p>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            {!showForm ? (
              <button
                onClick={toggleForm}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300"
              >
                Leave us a message :)
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col">
                <h1 className="text-3xl font-bold mb-6">Leave us a message :)</h1>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="mb-4 p-2 border border-gray-300 rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="mb-4 p-2 border border-gray-300 rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300"
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message"
                  className="mb-4 p-2 border border-gray-300 rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-200 hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300 mt-auto"
                >
                  Submit
                </button>
                <span id="msg">{message}</span>
              </form>
            )}
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0 pl-20">
            <h1 className="text-3xl font-bold mb-6">Contact Tanishq</h1>
            <div className="space-y-2">
              <p className="text-lg">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                tanishq.bansod@gmail.com
              </p>
              <p className="text-lg">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (412)-919-7673
              </p>
              <p className="text-lg">
                <FontAwesomeIcon icon={faSnapchatGhost} className="mr-2" />
                @tanishqbansod12
              </p>
              <a href="https://github.com/T1G3RR" target="_blank" rel="noopener noreferrer">
                <p className="text-lg pt-3">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  @T1G3RR
                </p>
              </a>
            </div>
          </div>
        </div>
      </Element>

      <footer className="bg-gray-800 text-white text-center pt-4 pb-2 flex flex-col items-center">
        <div className="flex items-center mb-2">
          <img onClick={homeClick} src={logoImage} alt="TAcademy Logo" className="h-8 mr-2" />
          <p className="text-sm">&copy; 2023 TAcademy. All rights reserved.</p>
        </div>
      </footer>


    </div>
  );
};

export default LandingPage;

// Dont forget to add shadows to the images :)