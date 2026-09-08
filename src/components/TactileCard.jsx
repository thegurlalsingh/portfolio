import React, { useRef } from "react";

export default function TactileCard({ children, className = '', ...props }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) {
            return;
        }
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.right) / rect.height) * 100;

        cardRef.current.style.setProperty('--x', `${x}%`);
        cardRef.current.style.setProperty('--y', `${y}%`);
    };

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} className={`tactile-card group relative overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/[0.06] hover:translate-y-0.5 ${className}`} {...props}>
            <div className="glow-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'radial-gradient(circle at var(--x,50%) var(--y, 50%), rgba(255, 255, 255, 0.05), transparent 60%)' }} />
            {children}
        </div>
    )
}