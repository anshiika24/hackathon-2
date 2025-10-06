import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-blue-800 text-white shadow-md absolute w-full z-20">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    Saathi
                </Link>
                <div className="space-x-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>Home</NavLink>
                    <NavLink to="/explore" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>Explore</NavLink>
                    <NavLink to="/safety" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>Safety</NavLink>
                    <NavLink to="/emergency" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300"}>Emergency</NavLink>
                </div>
                 <div>
                    <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-800">
                        Sign In
                    </button>
                </div>
            </nav>
        </header>
    );
}