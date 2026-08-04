    /* ── Mobile menu ── */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    const setMenuOpen = (open) => {
      menuOpen = open;
      mobileMenu.classList.toggle('open', menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
      mobileMenuToggle.setAttribute('aria-expanded', String(menuOpen));
      mobileMenuToggle.setAttribute('aria-label', menuOpen ? 'Cerrar menú' : 'Abrir menú');
    };

    mobileMenuToggle.addEventListener('click', () => {
      setMenuOpen(!menuOpen);
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        mobileMenuToggle.focus();
      }
    });
