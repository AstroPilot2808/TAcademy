import React from 'react';
import { Link, Element } from 'react-scroll';
import '../style.css'
import logoImage from '../images/download.jpg';
import headImage from '../images/images.jpg'

const LandingPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
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
            to="services"
            className="text-gray-800 cursor-pointer text-lg hover-underline-animation"
            smooth={true}
            duration={500}
          >
            Services
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
        TAcademy is an educational website dedicated to providing quality learning resources
        and courses for students of all levels. With interactive games, we make learning fun for all ages!
      </p>
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300">Login</button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300">Register</button>
        <button
  className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300"
  onClick={() => window.open('/demo-page', '_blank')}
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
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600">
            At TAcademy, we believe in empowering students with knowledge and helping them achieve
            their academic goals.
          </p>
        </div>
      </Element>

      <Element name="services" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600">
            We offer a wide range of educational services, including online courses, tutoring, and
            study materials tailored to individual needs.
          </p>
        </div>
      </Element>

      <Element name="contact" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            If you have any questions or inquiries, feel free to get in touch with us. We would love
            to hear from you!
          </p>
        </div>
      </Element>
    </div>
  );
};

export default LandingPage;
