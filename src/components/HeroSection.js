import React, { useState } from 'react';
import heroVideo from '../assets/hero.mp4';
import heroImage from '../assets/hero.webp';
import SmoothScroll from './SmoothScroll';

const HeroSection = ({ scrollToRef }) => {
    const [isVideoSupported, setIsVideoSupported] = useState(true);

    return (
        <section className="relative h-screen overflow-hidden">
            {isVideoSupported ? (
                <video
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={() => setIsVideoSupported(false)} // Change l'état si la vidéo ne peut pas être lue
                >
                    <source src={heroVideo} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
            ) : (
                <img
                    src={heroImage}
                    alt="Fallback image"
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
                />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center gap-5">
                <h1 className="text-4xl md:text-6xl font-bold">Arthur LAMBOTTE</h1>
                <h2 className="text-2xl md:text-3xl font-bold">Ingénieur Systèmes d'information / Développeur Web</h2>

                <SmoothScroll targetRef={scrollToRef}>
                    <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Voir mes projets
                    </button>
                </SmoothScroll>
            </div>
        </section>
    );
};

export default HeroSection;
