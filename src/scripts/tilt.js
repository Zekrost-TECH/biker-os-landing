    /* ── Phone parallax tilt ── */
    const heroPhone = document.getElementById('heroPhone');
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual && window.matchMedia('(pointer: fine)').matches) {
      heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        heroPhone.style.transform = `perspective(1000px) rotateY(${-8 + x * 8}deg) rotateX(${4 - y * 6}deg)`;
      });
      heroVisual.addEventListener('mouseleave', () => {
        heroPhone.style.transform = 'perspective(1000px) rotateY(-8deg) rotateX(4deg)';
      });
    }

