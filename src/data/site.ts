export interface SiteConfig {
  whatsappPhone: string;
  whatsappMessage: string;
  whatsappUrl: string;
  apiUrl: string;
  adminUrl: string;
  turnstileSiteKey: string;
}

const whatsappPhone = import.meta.env.PUBLIC_WHATSAPP_PHONE ?? '573046701922';
const whatsappMessage = 'Hola BikerOS, quiero crear mi club gratis.';

export const site: SiteConfig = {
  whatsappPhone,
  whatsappMessage,
  whatsappUrl: `https://api.whatsapp.com/send?phone=${whatsappPhone}`,
  apiUrl: import.meta.env.PUBLIC_API_URL ?? 'https://api.bikeros.co/api/v1',
  adminUrl: import.meta.env.PUBLIC_ADMIN_URL ?? 'https://admin.bikeros.co',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '',
};
