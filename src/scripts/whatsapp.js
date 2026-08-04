    /*
      ⚙️ CONFIGURACIÓN central en src/data/site.ts:
      - PUBLIC_WHATSAPP_PHONE (env) o WHATSAPP_PHONE por defecto
      - El mensaje predefinido se añade automáticamente.
    */
    import { site } from "../data/site";
    document.querySelectorAll('[data-cta-whatsapp]').forEach(el => {
      const url = new URL(site.whatsappUrl);
      url.searchParams.set('text', site.whatsappMessage);
      el.href = url.toString();
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
