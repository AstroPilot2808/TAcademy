import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import logoImage from '../images/download.jpg';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Handle login logic here
        navigate('/dashboard'); // Redirect to the dashboard page after successful login
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

    return (<div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500">
        <header>
            <nav className="container mx-auto py-4 px-10 flex items-center justify-between">
                <img onClick={homeClick} src={logoImage} alt="Display TAcademy Logo" className="h-20 shadow-2xl" />
                <ul className="flex justify-end space-x-8">
                    <li className="pt-2">
                        <Link
                            onClick={homeClick}
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
                            onClick={homeClick}
                            className="text-gray-800 cursor-pointer text-lg hover-underline-animation"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li className="pt-2 pl-2">
                        <Link
                            onClick={homeClick}
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

        <main className="container mx-auto py-16 flex-grow">
            <div className="w-1/2 mx-auto">
                <h1 className="text-4xl font-bold text-blue-600 text-center">Log In</h1>
                <form className="mt-8">
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2 text-lg text-gray-800">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-lg text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300"
                    >
                        Log In
                    </button>
                </form>
                <p className="text-lg mt-4 text-center">
                    Don't have an account?{' '}
                    <Link
                        onClick={registerButtonClick}
                        to="register"
                        className="text-black cursor-pointer hover-underline-animation"
                        smooth={true}
                        duration={500}
                    >
                        Register here
                    </Link>
                </p>
            </div>
        </main>

        <footer className="bg-gray-800 text-white text-center pt-4 pb-2 flex flex-col items-center">
            <div className="flex items-center mb-2">
                <img onClick={homeClick} src={logoImage} alt="TAcademy Logo" className="h-8 mr-2" />
                <p className="text-sm">&copy; 2023 TAcademy. All rights reserved.</p>
            </div>
        </footer>
    </div>


    );
};

export default Login;
