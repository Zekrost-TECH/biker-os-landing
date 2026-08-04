    /* ── Animated counters ── */
    const counters = document.querySelectorAll('[data-count]');
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const count = parseInt(target.dataset.count);
          const suffix = target.dataset.suffix || '';
          const duration = 2000;
          const start = 0;
          const startTime = performance.now();
          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (count - start) * easeOutQuart);
            if (count >= 1000) {
              target.textContent = current.toLocaleString('es-CO') + suffix;
            } else {
              target.textContent = current + suffix;
            }
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          requestAnimationFrame(updateCount);
          countObserver.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(counter => countObserver.observe(counter));

