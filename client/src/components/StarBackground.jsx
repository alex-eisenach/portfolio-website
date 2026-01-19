import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Configuration
        const STAR_COUNT = 200;
        const STAR_SPEED = 0.05; // Panning speed

        // State arrays
        const stars = [];
        const shootingStars = [];
        const satellites = [];

        // Helper classes/objects
        class Star {
            constructor() {
                this.reset();
                // Scatter initially across the screen
                this.x = Math.random() * canvas.width;
            }

            reset() {
                this.x = canvas.width; // Start from right
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5; // Size between 0.5 and 2.5
                this.opacity = Math.random() * 0.5 + 0.3;
                this.speed = (Math.random() * 0.2 + 0.1) * 0.5; // Parallax effect
            }

            update() {
                this.x -= STAR_SPEED + this.speed;
                if (this.x < 0) {
                    this.reset();
                }
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * (canvas.height / 2); // Top half only
                this.length = Math.random() * 80 + 10;
                this.speed = Math.random() * 10 + 6;
                this.angle = Math.PI / 4; // 45 degrees
                this.opacity = 0;
                this.active = false;
                this.wait = Math.random() * 500 + 100; // Random wait
            }

            update() {
                if (this.active) {
                    this.x -= this.speed * Math.cos(this.angle); // Move left
                    this.y += this.speed * Math.sin(this.angle); // Move down
                    this.length = Math.max(0, this.length - 0.5); // Shrink tail
                    this.opacity -= 0.01;

                    if (this.x < -100 || this.y > canvas.height || this.opacity <= 0) {
                        this.active = false;
                        this.wait = Math.random() * 800 + 200; // Reset wait timer
                    }
                } else {
                    this.wait--;
                    if (this.wait <= 0) {
                        this.active = true;
                        this.x = Math.random() * canvas.width;
                        this.y = Math.random() * (canvas.height / 3);
                        this.length = Math.random() * 80 + 30;
                        this.opacity = 1;
                    }
                }
            }

            draw() {
                if (!this.active) return;

                const gradient = ctx.createLinearGradient(
                    this.x,
                    this.y,
                    this.x + this.length * Math.cos(this.angle),
                    this.y - this.length * Math.sin(this.angle)
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x + this.length * Math.cos(this.angle),
                    this.y - this.length * Math.sin(this.angle)
                );
                ctx.stroke();
            }
        }

        class Satellite {
            constructor() {
                this.reset();
            }

            reset() {
                this.active = false;
                this.wait = Math.random() * 1500 + 500; // Rare event
            }

            activate() {
                this.active = true;
                this.y = Math.random() * (canvas.height * 0.8);
                this.size = 1.5;
                this.speed = 0.5;
                // Determine direction (left-to-right or right-to-left)
                this.direction = Math.random() > 0.5 ? 1 : -1;
                this.x = this.direction === 1 ? -10 : canvas.width + 10;
            }

            update() {
                if (this.active) {
                    this.x += this.speed * this.direction;

                    // Pulsate slightly
                    if (Math.random() > 0.95) {
                        this.opacity = Math.random() * 0.5 + 0.5;
                    }

                    if ((this.direction === 1 && this.x > canvas.width + 10) ||
                        (this.direction === -1 && this.x < -10)) {
                        this.reset();
                    }
                } else {
                    this.wait--;
                    if (this.wait <= 0) {
                        this.activate();
                    }
                }
            }

            draw() {
                if (!this.active) return;
                ctx.fillStyle = `rgba(200, 200, 255, 0.8)`; // Slightly blueish
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }


        // Initialize
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push(new Star());
        }
        // Initialize stars randomly across the screen initially so it's not empty
        stars.forEach(star => {
            star.x = Math.random() * canvas.width;
        });

        for (let i = 0; i < 2; i++) shootingStars.push(new ShootingStar()); // 2 potential shooting stars
        satellites.push(new Satellite());


        // Animation Loop
        const animate = () => {
            ctx.fillStyle = '#050B14'; // Dark night sky background
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            shootingStars.forEach(s => {
                s.update();
                s.draw();
            });

            satellites.forEach(s => {
                s.update();
                s.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none -z-50"
        />
    );
};

export default StarBackground;
