import React, { useState, useEffect } from 'react';
import SmoothScroll from './SmoothScroll';

const Header = ({ sectionsRefs }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full top-0 z-20 transition-all duration-300
                ${isScrolled
                    ? 'bg-gray-800/95 backdrop-blur-sm shadow-lg py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
                <h1 className={`text-2xl transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
                    Arthur LAMBOTTE
                </h1>

                {/* Burger button - reste identique */}
                <button
                    className={`block md:hidden focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                {/* Menu desktop */}
                <ul className={`hidden md:flex space-x-8 transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.heroRef}>Accueil</SmoothScroll>
                    </li>
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.projectsRef}>Projets</SmoothScroll>
                    </li>
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.skillsRef}>Compétences</SmoothScroll>
                    </li>
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.contactRef}>Contact</SmoothScroll>
                    </li>
                </ul>

                {/* Menu mobile */}
                <ul
                    className={`md:hidden absolute top-full left-0 w-full bg-gray-800/95 backdrop-blur-sm p-4 space-y-4 transition-all duration-300 
                        ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                >
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.heroRef} onClick={toggleMenu}>Accueil</SmoothScroll>
                    </li>
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.projectsRef} onClick={toggleMenu}>Projets</SmoothScroll>
                    </li>
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.skillsRef} onClick={toggleMenu}>Compétences</SmoothScroll>
                    </li>
                    <li>
                        <SmoothScroll targetRef={sectionsRefs.contactRef} onClick={toggleMenu}>Contact</SmoothScroll>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
