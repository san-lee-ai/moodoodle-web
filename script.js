// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('section').forEach((section) => {
  gsap.from(section.children, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});