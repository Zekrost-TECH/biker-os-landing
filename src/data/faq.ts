export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: '¿Necesito tarjeta de crédito para la prueba gratis?',
    answer:
      'No. El plan Prueba es completamente gratuito por 21 días y te da acceso a 15 miembros y 5 eventos. Solo si decides quedarte, eliges un plan de pago.',
  },
  {
    question: '¿Cómo puedo pagar BikerOS?',
    answer:
      'Después de la prueba de 21 días, eliges un plan y pagas en pesos colombianos desde el panel de administración con tarjeta de crédito o débito, Nequi o PSE. Tu suscripción se renueva automáticamente y puedes cancelar cuando quieras.',
  },
  {
    question: '¿Puedo cancelar mi suscripción cuando quiera?',
    answer:
      'Sí. No hay contratos de permanencia. Puedes cancelar desde el panel de administración y conservar tus datos en modo de solo lectura por 90 días.',
  },
  {
    question: '¿Qué pasa si supero el límite de miembros de mi plan?',
    answer:
      'Te enviamos alertas progresivas al 80%, 100% y 110% del límite. Pasado el 100%, las nuevas invitaciones quedan pendientes hasta que subas de plan. Tus datos nunca se pierden.',
  },
  {
    question: '¿La app funciona sin internet?',
    answer:
      'Sí. La app está diseñada para la carretera: las rutas, tu ficha médica y los datos del club se guardan en tu teléfono. Cuando recuperas señal, todo se sincroniza solo.',
  },
  {
    question: '¿Puedo tener la app con el logo y colores de mi club?',
    answer:
      'Sí, con el plan Elite. Creamos una aplicación white-label con el nombre, logo, colores y dominio propio de tu club. Ideal para federaciones, marcas o clubs grandes.',
  },
  {
    question: '¿Emiten factura electrónica?',
    answer:
      'Sí. Cada pago genera automáticamente una factura electrónica válida ante la DIAN, que llega en PDF al correo de facturación de tu club.',
  },
  {
    question: '¿Mis datos médicos están seguros?',
    answer:
      'Tu ficha médica ICE está cifrada y solo es visible para los administradores y líderes del club durante una emergencia SOS real. No compartimos ni vendemos tus datos.',
  },
];
