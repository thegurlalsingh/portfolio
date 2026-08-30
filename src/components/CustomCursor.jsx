import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) {
            return;
        }
        const onMouseMove = (e) => {
            requestAnimationFrame(() => {
                cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            });
        };

        const onMouseEnter = () => setIsActive(true);
        const onMouseLeave = () => setIsActive(false);

        const attachListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer, .stack-item');
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
                el.addEventListener('mouseenter', onMouseEnter);
                el.addEventListener('mouseleave', onMouseLeave);
            });
        };

        document.addEventListener('mousemove', onMouseMove);
        attachListeners();

        const observer = new MutationObserver(() => {
            attachListeners();
        });

        observer.observe(document.body, {
            childList: true, subtree: true
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer, .stack-item');
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={cursorRef} className={`fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform cursor-transition duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] box-border ${isActive ? '!w-[50px] !h-[50px] !bg-white/15 !border !border-white/80 !mix-blend-normal' : ''}`} />
    );
}