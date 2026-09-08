import React, { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 bg-surface/40 backdrop-blur-2xl border-b border-white/5 ${isScrolled ? 'h-16' : 'h-20'}`}>
                <nav className={`flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto transition-all duration-700 ${isScrolled ? 'h-16' : 'h-20'}`}>
                    <a className="font-display-xl text-xl tracking-tight text-on-surface" href="#">GURLAL SINGH</a>
                    <button onClick={() => setIsMenuOpen(true)} className="material-symbols-outlined text-3xl text-on-surface hover:text-white transition-colors duration-300 cursor-pointer" id="open-menu" aria-label="Open Menu">menu</button>
                </nav>
            </header>
        </div>
    )
}