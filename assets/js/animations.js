document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Elements
    gsap.utils.toArray('.fade-up').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Stagger Lists (Services, Cards, etc)
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => {
        const items = container.querySelectorAll('.stagger-item');
        gsap.to(items, {
            scrollTrigger: {
                trigger: container,
                start: "top 80%"
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)"
        });
    });

    // Hero Animation (On Load)
    const heroTl = gsap.timeline();
    heroTl.from(".hero-title", { y: 30, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-btn-group", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");
});
