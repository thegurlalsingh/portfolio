import React, { useEffect, useRef } from "react";

export default function MatrixBackground() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        const keywords = ['REACT', 'THREE.JS', 'WEBGL', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'GSAP', 'FRAMER', 'NODE', 'DSA', 'ML', 'DL', 'AI', 'CV', 'NLP', 'AGI', 'GENAI', 'PYTHON'];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() * 1 + 0.5;
                this.text = keywords[Math.floor(Math.random() * keywords.length)];
                this.fontSize = Math.random() * 10 + 10;
                this.opacity = Math.random() * 0.15 + 0.05;
            }

            update(mX, mY) {
                this.y += this.speed;
                if (this.y > canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }

                if (mX !== null && mY !== null) {
                    const dx = mX - this.x;
                    const dy = mY - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;

                    if (distance < maxDistance) {
                        const force = (maxDistance - distance) / maxDistance;
                        this.x -= (dx / distance) * force * 5;
                        this.y -= (dy / distance) * force * 5;
                    }
                }
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        const particles = Array.from({ length: 50 }, () => new Particle());

        let mouseX = null;
        let mouseY = null;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = null;
            mouseY = null;
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        let animationFrameId;

        const animateMatrix = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update(mouseX, mouseY);
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animateMatrix);
        };

        animateMatrix();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return (
        <canvas ref={canvasRef} id="matrix-bg" className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none" />
    );
}