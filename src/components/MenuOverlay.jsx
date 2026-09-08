import React, { useEffect, useRef } from "react";
import gsap from 'gsap';

export default function MenuOverlay({ isOpen, onClose }) {
    const containerRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            gsap.fromTo(
                linksRef.current, { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
            );
        }
        else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const handleClose = () => {
        if (linksRef.current.length > 0) {
            gsap.to(linksRef.current,
                {
                    y: -50, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power3.in',
                    onComplete: () => {
                        onClose();
                    }
                }
            );
        }
        else {
            onClose();
        }
    };

    const navLinks = [
        { label: 'Work', href: '#work' },
        { label: 'Experience', href: '#experience' },
        { label: 'Stack', href: '#stack' },
        { label: 'Recognition', href: '#recognition' },
        { label: 'Study Material', href: '#study-material' },
        { label: 'Contact', href: '#finale' },
    ];

    return (
        <div ref={containerRef} id="menu-overlay" className={`fixed inset-0 z-[100] bg-surface/80 backdrop-blur-xl flex flex-col justify-center items-center transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <button onClick={handleClose} className='absolute top-8 right-margin-mobile md:right-margin-desktop material-symbols-outlined text-4xl text-on-surface hover:text-electric-white transformation-colors duration-300 cursor-pointer' id="close-menu" aria-label="Close menu">
                Close
            </button>
            <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                    <a key={link.label} ref={(el) => (linksRef.current[index] = el)} href={link.href} onClick={handleClose} className="menu-link font-display-xl text-5xl md:text-7xl uppercase text-on-surface hover:text-white transition-all duration-300 hover:bg-shadow-[0_0_20px_rgba(0, 0.240, 0.255, 0.6)]">
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>
    )

}