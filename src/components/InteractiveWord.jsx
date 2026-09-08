import React, { useState, useEffect } from 'react';

export default function InteractiveWord({ defaultWord, alternateWord }) {
    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let timer;
        if (isHovered) {
            let index = displayText.length;
            timer = setInterval(() => {
                if (index < alternateWord.length) {
                    index++;
                    setDisplayText(alternateWord.slice(0, index));
                } else {
                    clearInterval(timer);
                }
            }, 90);
        } else {
            let index = displayText.length;
            timer = setInterval(() => {
                if (index > 0) {
                    index--;
                    setDisplayText(alternateWord.slice(0, index));
                } else {
                    clearInterval(timer);
                }
            }, 50);
        }

        return () => clearInterval(timer);
    }, [isHovered, alternateWord]);

    return (
        <span
            className="relative inline-block cursor-pointer select-none group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Base Word (Defines exact text width bounds) */}
            <span
                className={`inline-block transition-opacity duration-500 ${isHovered ? 'opacity-15' : 'opacity-100'
                    }`}
            >
                {defaultWord}
            </span>

            {/* Strikethrough Line (Strikes ONLY through defaultWord bounds) */}
            <span
                className={`absolute top-1/2 left-0 w-full h-[3px] bg-white/80 pointer-events-none origin-left transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
            />

            {/* Alternate Word Overlay */}
            <span className="absolute inset-0 flex items-center justify-start text-white pointer-events-none font-display-xl font-extrabold tracking-tight whitespace-nowrap overflow-hidden">
                {displayText}
            </span>
        </span>
    );
}
