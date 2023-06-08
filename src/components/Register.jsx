import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import logoImage from '../images/download.jpg';

const Register = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');

    const [errors, setErrors] = useState({});

    const handleRegister = () => {
        const validationErrors = {};

        if (!firstName) {
            validationErrors.firstName = 'Please fill this out';
        }

        if (!lastName) {
            validationErrors.lastName = 'Please fill this out';
        }

        if (!dateOfBirth) {
            validationErrors.dateOfBirth = 'Please fill this out';
        }

        if (!email) {
            validationErrors.email = 'Please fill this out';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!username) {
            validationErrors.username = 'Please fill this out';
        }

        if (!password) {
            validationErrors.password = 'Please fill this out';
        } else if (password.length < 8) {
            validationErrors.password = 'Password should be at least 8 characters long';
        }

        if (!reenterPassword) {
            validationErrors.reenterPassword = 'Please fill this out';
        } else if (password !== reenterPassword) {
            validationErrors.reenterPassword = 'Passwords do not match';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        // Create an object with the user data
        const userData = {
            firstName,
            lastName,
            dateOfBirth,
            email,
            username,
            password,
        };

        // Make an HTTP POST request to your serverless function endpoint
        fetch('/.netlify/functions/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.ok) {
                    // Handle the success response
                    // For example, show a success message or redirect to the dashboard
                    navigate('/dashboard');
                } else {
                    // Handle the error response
                    // For example, display an error message
                    throw new Error('Registration failed');
                }
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.log(error);
            });
    };


    const loginButtonClick = () => {
        navigate('/login');
    };

    const homeClick = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500">
            <header>
                <nav className="container mx-auto py-4 flex items-center justify-between px-10">
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

            <main className="container mx-auto py-16">
                <div className="w-1/2 mx-auto">
                    <h1 className="text-4xl font-bold text-blue-600 text-center">Create an account</h1>
                    <form className="mt-8">
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block mb-2 text-lg text-gray-800">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className={`w-full p-2 border rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300 ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block mb-2 text-lg text-gray-800">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className={`w-full p-2 border rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300 ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dateOfBirth" className="block mb-2 text-lg text-gray-800">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                className={`w-full p-2 border rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300 ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                            {errors.dateOfBirth && (
                                <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-lg text-gray-800">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`w-full p-2 border rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-2 text-lg text-gray-800">
                                Create Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                className={`w-full p-2 border rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300 ${errors.username ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-lg text-gray-800">
                                Create Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className={`w-full p-2 border rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300 ${errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="reenterPassword" className="block mb-2 text-lg text-gray-800">
                                Re-enter Password
                            </label>
                            <input
                                type="password"
                                id="reenterPassword"
                                className={`w-full p-2 border rounded-lg focus:bg-blue-200 focus:outline-none transition-all duration-300 ${errors.reenterPassword ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={reenterPassword}
                                onChange={(e) => setReenterPassword(e.target.value)}
                            />
                            {errors.reenterPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.reenterPassword}</p>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={handleRegister}
                            className="bg-blue-600 text-white py-2 w-full rounded-lg mr-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-600 transition-all duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-lg mt-4 text-center">
                        Already have an account?{' '}
                        <Link
                            onClick={loginButtonClick}
                            to="login"
                            className="text-black cursor-pointer hover-underline-animation"
                            smooth={true}
                            duration={500}
                        >
                            Login here
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

export default Register;