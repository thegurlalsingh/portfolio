import React from 'react';
import InteractiveWord from './InteractiveWord';

export default function Hero() {
    return (
        <section className="max-w-container-max mx-auto pt-32 pb-32 px-margin-mobile md:px-margin-desktop min-h-[90vh] flex flex-col justify-center">
            <header className="relative">
                {/* Animated Arrow + Hint Label pointing to Interactive Heading */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2 hero-reveal" style={{ animationDelay: '0.05s' }}>
                    <span className="font-label-sm text-xs text-lime-green tracking-widest uppercase font-medium flex items-center gap-2 bg-lime-green/10 px-4 py-1.5 rounded-full border border-lime-green/20">
                        <span className="w-2 h-2 rounded-full bg-lime-green animate-ping text-center justify-center items-center" />
                        (hover text below)
                    </span>

                    {/* Scaled Replica Spiral SVG Arrow */}
                    <div className="relative select-none pointer-events-none -ml-3 -mt-1">
                        <svg
                            viewBox="0 0 300 180"
                            fill="none"
                            className="w-36 h-20 md:w-44 md:h-24 text-lime-green stroke-current overflow-visible"
                        >
                            {/* Loop Path matching your image */}
                            <path
                                d="M 270,150 C 270,50 210,10 170,25 C 130,40 150,110 180,90 C 200,70 170,30 130,30 C 80,30 40,80 35,130"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="arrow-path-draw"
                            />
                            {/* Arrowhead pointing down-left */}
                            <path
                                d="M 15,100 L 35,130 L 70,115"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="arrow-head-draw"
                            />
                        </svg>
                    </div>
                </div>

                {/* Scaled Main Heading */}
                <h1 className="font-display-xl text-[clamp(1.5rem,3.5vw,3.25rem)] leading-[1.15em] -tracking-[0.03em] font-extrabold mb-8 flex flex-col items-start gap-2.5 whitespace-nowrap">
                    <div className="hero-reveal" style={{ animationDelay: '0.1s' }}>
                        <InteractiveWord defaultWord="TEACHING MACHINES" alternateWord="MAKING THEM ACT" />
                    </div>
                    <div className="hero-reveal" style={{ animationDelay: '0.25s' }}>
                        <InteractiveWord defaultWord="PROMPT MACHINE" alternateWord="FORGING AGENCY" />
                    </div>
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <p
                        className="font-body-md text-xl md:text-2xl max-w-2xl text-on-surface-variant font-light leading-relaxed hero-reveal"
                        style={{ animationDelay: '0.4s' }}
                    >
                        AI engineer obsessed with making machines do more than generate. I build{' '}
                        <span className="text-on-surface">agents</span>,{' '}
                        <span className="text-on-surface">multimodal systems</span>, and{' '}
                        <span className="text-on-surface">intelligent products</span> that turn models into things that actually think, act, and solve.
                    </p>

                    <div
                        className="flex flex-col gap-6 hero-reveal"
                        style={{ animationDelay: '0.55s' }}
                    >
                        <div className="flex gap-3 shrink-0">
                            <span className="px-4 py-1.5 rounded-full border border-white/10 text-on-surface font-label-sm text-[10px] uppercase tracking-widest bg-white/5 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-lime-green rounded-full animate-pulse" />
                                Available for Internship
                            </span>
                            <span className="px-4 py-1.5 rounded-full border border-white/5 text-on-surface-variant font-label-sm text-[10px] uppercase tracking-widest">
                                India, DE
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                className="font-display-xl text-sm uppercase tracking-widest px-6 py-2.5 border border-white/20 rounded-full bg-surface-glass backdrop-blur-md hover:border-electric-blue hover:text-electric-blue transition-all duration-300 shadow-[0_0_0_rgba(0,240,255,0)] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-on-surface"
                                href="https://github.com/thegurlalsingh"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                            <a
                                className="font-display-xl text-sm uppercase tracking-widest px-6 py-2.5 border border-white/20 rounded-full bg-surface-glass backdrop-blur-md hover:border-lime-green hover:text-lime-green transition-all duration-300 shadow-[0_0_0_rgba(204,255,0,0)] hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] text-on-surface"
                                href="https://www.linkedin.com/in/gurlal-singh-6933702a4/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                className="inline-flex items-center justify-center font-display-xl text-xs uppercase tracking-widest px-5 py-2 border border-white/20 rounded-full bg-surface-glass backdrop-blur-md hover:border-electric-blue hover:text-electric-blue transition-all duration-300 shadow-[0_0_0_rgba(0,240,255,0)] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-on-surface leading-none shrink-0"
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Resume
                            </a>

                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}
