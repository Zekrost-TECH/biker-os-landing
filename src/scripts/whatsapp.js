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

