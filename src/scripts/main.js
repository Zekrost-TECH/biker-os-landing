    /*
      ⚙️ CONFIGURACIÓN: reemplaza este enlace con tu wa.link real de WhatsApp Business.
      El mensaje predefinido se añade automáticamente.
    */
    const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=573046701922';
    const WHATSAPP_MESSAGE = 'Hola BikerOS, quiero crear mi club gratis.';

    document.querySelectorAll('[data-cta-whatsapp]').forEach(el => {
      const url = new URL(WHATSAPP_URL);
      url.searchParams.set('text', WHATSAPP_MESSAGE);
      el.href = url.toString();
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });

    /* ── Scroll progress bar ── */
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = `${progress}%`;
    }, { passive: true });

    /* ── Sticky nav ── */
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    /* ── Mobile menu ── */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    mobileMenuToggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* ── Scroll reveal animations ── */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

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

    /* ── Phone screenshot carousel ── */
    const phoneImages = document.querySelectorAll('.hero-visual .phone-screen img');
    let currentImage = 0;
    setInterval(() => {
      phoneImages[currentImage].classList.remove('active');
      currentImage = (currentImage + 1) % phoneImages.length;
      phoneImages[currentImage].classList.add('active');
    }, 3500);

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

    /* ── Pricing toggle ── */
    const monthlyBtn = document.getElementById('monthlyBtn');
    const annualBtn = document.getElementById('annualBtn');
    const priceAmounts = document.querySelectorAll('.pricing-price .amount');
    const periodLabels = document.querySelectorAll('.pricing-price .period');
    let isAnnual = false;

    function updatePrices() {
      priceAmounts.forEach(amount => {
        const value = isAnnual ? amount.dataset.annual : amount.dataset.monthly;
        amount.style.opacity = '0';
        setTimeout(() => {
          amount.textContent = '$' + value;
          amount.style.opacity = '1';
        }, 150);
      });
      periodLabels.forEach(label => {
        label.textContent = isAnnual ? '/año' : '/mes';
      });
      monthlyBtn.classList.toggle('active', !isAnnual);
      annualBtn.classList.toggle('active', isAnnual);
    }

    monthlyBtn.addEventListener('click', () => {
      isAnnual = false;
      updatePrices();
    });

    annualBtn.addEventListener('click', () => {
      isAnnual = true;
      updatePrices();
    });

    /* ── FAQ accordion ── */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    /* ── Active nav link on scroll ── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
      });
    }, { passive: true });
