import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 sticky top-0 py-2 z-10">
            <ul className="flex font-serif">
                <li className="ml-3 mr-6">
                    <NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink>
                </li>
                <li className="mr-6">
                    <NavLink to="/courses" className="text-white hover:text-gray-300">Courses</NavLink>
                </li>
                <li className="mr-6">
                    <NavLink to="/attendance" className="text-white hover:text-gray-300">Attendance</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
