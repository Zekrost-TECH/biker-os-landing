    /* ── Phone screenshot carousel ── */
    const phoneImages = document.querySelectorAll('.hero-visual .phone-screen img');
    let currentImage = 0;
    setInterval(() => {
      phoneImages[currentImage].classList.remove('active');
      currentImage = (currentImage + 1) % phoneImages.length;
      phoneImages[currentImage].classList.add('active');
    }, 3500);

