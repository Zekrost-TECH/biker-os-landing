export interface SiteConfig {
  whatsappPhone: string;
  whatsappMessage: string;
  whatsappUrl: string;
}

const whatsappPhone = import.meta.env.PUBLIC_WHATSAPP_PHONE ?? '573046701922';
const whatsappMessage = 'Hola BikerOS, quiero crear mi club gratis.';

export const site: SiteConfig = {
  whatsappPhone,
  whatsappMessage,
  whatsappUrl: `https://api.whatsapp.com/send?phone=${whatsappPhone}`,
};
