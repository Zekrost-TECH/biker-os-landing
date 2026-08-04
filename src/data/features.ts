export interface FeatureCard {
  iconClass: string;
  icon: string;
  title: string;
  description: string;
}

export const featureCards: FeatureCard[] = [
  {
    iconClass: 'danger',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    title: 'SOS de emergencia',
    description:
      'Un solo toque envía tu ubicación GPS y ficha médica ICE a todos los miembros del club. Tipos: pinchazo, falla mecánica, accidente, sin gasolina, emergencia médica.',
  },
  {
    iconClass: 'cyan',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
    title: 'Tracking GPS en vivo',
    description:
      'Ve en el mapa dónde está cada piloto de tu manada durante la rodada, en tiempo real. Nadie se pierde, nadie queda atrás sin que lo sepas.',
  },
  {
    iconClass: '',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>',
    title: 'Rodadas y eventos',
    description:
      'RSVP con roles (líder, sweep, rider), punto de encuentro, dificultad, checklist compartido e inventario de rodada.',
  },
  {
    iconClass: 'cyan',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="15" y1="3" y2="6"/><line x1="9" x2="9" y1="18" y2="21"/></svg>',
    title: 'Rutas con waypoints',
    description:
      'Guarda las mejores rutas de tu club con sus paradas, tanqueadas y miradores. Tus pilotos las llevan en la app, incluso sin internet.',
  },
  {
    iconClass: '',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8"/><circle cx="12" cy="10" r="3"/></svg>',
    title: 'Puntos de apoyo',
    description:
      'Talleres, gasolineras, llanterías, grúas y hospitales verificados por la comunidad. Encuentra ayuda en tu ruta.',
  },
  {
    iconClass: 'cyan',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    title: 'Ficha médica ICE',
    description:
      'Tipo de sangre, alergias, condiciones médicas y contacto de emergencia. Visible solo cuando el club necesita ayudarte.',
  },
];

export interface LargeFeature {
  icon: string;
  title: string;
  description: string;
  listItems: string[];
}

export const largeFeature: LargeFeature = {
  icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5c0-2 2-3 4-3.5Z"/></svg>',
  title: 'Funciona sin internet',
  description:
    'En la carretera la señal falla, BikerOS no. Tus rutas, tu ficha médica y los datos de tu club viajan siempre contigo en el teléfono.',
  listItems: [
    'Tus rutas siempre disponibles',
    'Todo se sincroniza cuando vuelve la señal',
    'Tu información guardada en tu teléfono',
  ],
};
