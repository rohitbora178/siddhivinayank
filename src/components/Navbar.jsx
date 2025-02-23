import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openModal } from '../redux/modalSlice';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();  // Initialize navigate hook
    const dispatch = useDispatch();

    // Toggle the Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Navigation Handlers
    const handleHome = () => {
        navigate('/');
    };

    const handleAbout = () => {
        navigate('/about');
    };

    const handleContact = () => {
        navigate('/contact');
    };

    const handleOpenModal = () => {
        dispatch(openModal());
    };
    return (
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold cursor-pointer" onClick={handleHome}>Logo</div>
                <div className="hidden md:flex space-x-4">
                    <p className="cursor-pointer hover:text-gray-400" onClick={handleHome}>Home</p>
                    <p className="cursor-pointer hover:text-gray-400" onClick={handleAbout}>About</p>
                    <p className="cursor-pointer hover:text-gray-400" onClick={handleContact}>Contact</p>
                    <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700" onClick={handleOpenModal}>Donate</button>
                </div>
                {/* Mobile Menu Button */}
                <button onClick={toggleDrawer} className="md:hidden text-2xl" aria-label="Open mobile menu">
                    &#9776;
                </button>
            </div>

            {/* Drawer (Mobile Menu) */}
            {isDrawerOpen && (
                <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-10" onClick={toggleDrawer}>
                    <div className="bg-gray-800 w-64 h-full p-4 absolute left-0 top-0" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-xl font-bold cursor-pointer" onClick={handleHome}>Logo</div>
                            <button onClick={toggleDrawer} className="text-2xl" aria-label="Close mobile menu">
                                &times;
                            </button>
                        </div>
                        <div className="space-y-4">
                            <p className="block cursor-pointer hover:text-gray-400" onClick={handleHome}>Home</p>
                            <p className="block cursor-pointer hover:text-gray-400" onClick={handleAbout}>About</p>
                            <p className="block cursor-pointer hover:text-gray-400" onClick={handleContact}>Contact</p>
                            <button className="w-full bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700" onClick={handleOpenModal}>Donate</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
