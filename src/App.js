import React, { useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const heroRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Header sectionsRefs={{ heroRef, projectsRef, skillsRef, contactRef }} />
            <div ref={heroRef} className="min-h-screen bg-gray-50">
                <HeroSection scrollToRef={projectsRef} />
            </div>
            <div ref={projectsRef} className="min-h-screen pt-6 bg-blue-50">
                <Projects />
            </div>
            <div ref={skillsRef} className="min-h-screen pt-6 bg-gray-50">
                <Skills />
            </div>
            <div ref={contactRef} className="min-h-screen pt-6 bg-blue-50">
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default App;
