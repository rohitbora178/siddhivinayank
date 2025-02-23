import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../redux/modalSlice";
import image from "../assets/img.jpg"; 
import img1 from '../assets/photo_1.jpg';
import img2 from '../assets/photo_2.jpg';
import img3 from '../assets/photo_3.jpg';
import img4 from '../assets/photo_4.jpg';
const carouselImages = [
    img1,
    img2,
    img3,
    img4,
];

const Home = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);

    // Open Modal Handler
    const handleOpenModal = () => {
        dispatch(openModal());
    };

    // Close Modal Handler
    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle Image change automatically every 3 seconds (3000ms)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000); // Change every 3 seconds

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-300 to-green-200 flex flex-col justify-center items-center text-center py-16 px-6"
            style={{ minHeight: "calc(100vh - 64px)" }}
        >
            {/* Heading with animation and orange color */}
            <h1 className="text-4xl font-bold text-orange-600 mb-4 animate__animated animate__fadeIn">
                सिद्धिविनायक मंच , बेलापूर
            </h1>

            {/* Description with orange text */}
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                Join us in celebrating Ganesh Chaturthi and help us continue our
                efforts by donating today. Your support makes a big difference!
            </p>

            {/* Image with zoom animation */}
            <div className="mb-8">
                <img
                    src={image}
                    alt="Ganpati Idol"
                    className="rounded-lg shadow-xl w-full max-w-3xl mx-auto transition-transform duration-500 transform hover:scale-105"
                />
            </div>

            {/* Carousel */}
            <div className="relative mb-8 w-full max-w-3xl mx-auto">
                {/* Carousel Image with fade-in animation */}
                <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={carouselImages[currentIndex]}
                        alt={`carousel image ${currentIndex + 1}`}
                        className="w-full h-full object-cover transition-transform transform hover:scale-110 ease-in-out duration-700"
                    />
                </div>
            </div>

            {/* Call to action button */}
            <button
                onClick={handleOpenModal} // Using handleOpenModal to open the modal
                className="bg-blue-600 px-8 py-4 text-white text-xl rounded-md hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
            >
                Donate & Support the Mandal
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-sm w-full">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            Donate to the Mandal
                        </h2>
                        <div className="flex justify-center mb-4">
                            <img
                                alt="QR Code for donation to Siddhivinayak Mandal"
                                src='https://raw.githubusercontent.com/zpao/qrcode.react/HEAD/qrcode.png'
                                className="rounded-md"
                            />
                        </div>
                        <button
                            onClick={handleCloseModal}
                            className="bg-blue-600 px-8 py-4 text-white rounded-md w-full hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
