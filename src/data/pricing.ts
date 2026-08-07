const checkIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
const xIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

export interface PricingFeature {
  text: string;
  available: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  delay: number;
  popular?: boolean;
  monthly?: string;
  annual?: string;
  customPrice?: string;
  period: string;
  features: PricingFeature[];
  cta: string;
  ctaClass: string;
  /** true → enlace a /crear-club (self-service); false → WhatsApp (venta consultiva) */
  selfService: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Prueba',
    description: 'Para validar BikerOS con tu club antes de pagar.',
    delay: 0,
    monthly: '0',
    annual: '0',
    period: '/ 21 días',
    features: [
      { text: '15 miembros', available: true },
      { text: '5 eventos por mes', available: true },
      { text: 'App móvil completa', available: true },
      { text: 'SOS y tracking GPS', available: true },
      { text: 'Panel web básico', available: true },
    ],
    cta: 'Empezar gratis',
    ctaClass: 'btn btn-secondary',
    selfService: true,
  },
  {
    name: 'Esencial',
    description: 'Clubs pequeños y nuevos que empiezan a profesionalizarse.',
    delay: 1,
    monthly: '79.900',
    annual: '799.000',
    period: '/mes',
    features: [
      { text: '25 miembros', available: true },
      { text: 'Eventos ilimitados', available: true },
      { text: 'Biblioteca de rutas', available: true },
      { text: 'Soporte por email', available: true },
      { text: 'Checklist e inventario', available: false },
    ],
    cta: 'Elegir Esencial',
    ctaClass: 'btn btn-secondary',
    selfService: true,
  },
  {
    name: 'Básico',
    description: 'Clubs establecidos con operación real de rodadas.',
    delay: 2,
    popular: true,
    monthly: '149.900',
    annual: '1.499.000',
    period: '/mes',
    features: [
      { text: '50 miembros', available: true },
      { text: 'Eventos ilimitados', available: true },
      { text: 'Checklist e inventario', available: true },
      { text: 'Puntos de apoyo verificados', available: true },
      { text: 'Gestión de SOS desde la web', available: true },
      { text: 'Mantenimiento de motos y alertas', available: true },
    ],
    cta: 'Elegir Básico',
    ctaClass: 'btn btn-primary',
    selfService: true,
  },
  {
    name: 'Pro',
    description: 'Clubs grandes con administradores y datos que importan.',
    delay: 3,
    monthly: '249.900',
    annual: '2.499.000',
    period: '/mes',
    features: [
      { text: '100 miembros', available: true },
      { text: 'Todo lo de Básico', available: true },
      { text: 'Reportes y estadísticas del club', available: true },
      { text: 'Exporta tus datos a Excel', available: true },
      { text: 'Múltiples administradores', available: true },
      { text: 'Soporte prioritario por WhatsApp', available: true },
    ],
    cta: 'Elegir Pro',
    ctaClass: 'btn btn-secondary',
    selfService: true,
  },
  {
    name: 'Empresarial',
    description: 'Clubs muy grandes, multi-ciudad o con patrocinios.',
    delay: 1,
    monthly: '699.900',
    annual: '6.999.000',
    period: '/mes',
    features: [
      { text: '250 miembros', available: true },
      { text: 'Todo lo de Pro', available: true },
      { text: 'Sub-clubes y grupos de rodada', available: true },
      { text: 'Hasta 3 rodadas simultáneas', available: true },
      { text: 'Integraciones a la medida', available: true },
      { text: 'Disponibilidad garantizada 99.5%', available: true },
    ],
    cta: 'Elegir Empresarial',
    ctaClass: 'btn btn-secondary',
    selfService: false,
  },
  {
    name: 'Elite',
    description: 'Federaciones, marcas y clubs que quieren su propia app.',
    delay: 2,
    customPrice: 'A convenir',
    period: '',
    features: [
      { text: 'Miembros ilimitados', available: true },
      { text: 'Todo lo de Empresarial', available: true },
      { text: 'App propia con tu nombre y colores', available: true },
      { text: 'Tu propio dominio', available: true },
      { text: 'Línea directa con nuestro equipo', available: true },
      { text: 'Funcionalidades a la medida', available: true },
    ],
    cta: 'Hablar con ventas',
    ctaClass: 'btn btn-primary',
    selfService: false,
  },
];

export { checkIcon, xIcon };
