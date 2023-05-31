import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../images/download.jpg';

const NotFound = () => {
    const loginButtonClick = () => {
        navigate('/login');
    };

    const registerButtonClick = () => {
        navigate('/register');
    };

    const homeClick = () => {
        navigate('/');
    };

    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500">
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

            <main className="container mx-auto flex-grow py-16">
                <div className="w-1/2 mx-auto">
                    <h1 className="text-4xl font-bold text-blue-600 text-center">404 Error - Page Not Found</h1>
                    <p className="text-lg mt-4 text-center">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                    <p className="text-lg mt-4 text-center">
                        <button
                            onClick={homeClick}
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300"
                        >
                            Back to Home
                        </button>
                    </p>


                </div>
            </main>

            <footer className="bg-gray-800 text-white text-center py-4 flex flex-col items-center">
                <div className="flex items-center mb-2">
                    <img onClick={homeClick} src={logoImage} alt="TAcademy Logo" className="h-8 mr-2" />
                    <p className="text-sm">&copy; 2023 TAcademy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;
