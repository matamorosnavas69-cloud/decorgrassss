import { useTranslation } from 'react-i18next';

const WHATSAPP_PHONE = '573208523041';

export const useWhatsApp = () => {
  const { t } = useTranslation();

  const sendToWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const sendDefaultMessage = () => {
    const message = t(
      'contact.whatsapp.message',
      'Hola! Me interesa conocer más sobre sus servicios de grama sintética.',
    );
    sendToWhatsApp(message);
  };

  const sendQuoteRequest = (service?: string) => {
    const baseMessage = t('contact.quote.message', 'Hola! Me gustaría solicitar una cotización para grama sintética.');
    const message = service ? `${baseMessage}\n\nServicio de interés: ${service}` : baseMessage;
    sendToWhatsApp(message);
  };

  const getFormattedContactMessage = (data: {
    name: string;
    phone: string;
    email: string;
    message: string;
    projectType?: string;
    area?: string;
  }) => {
    let message = `🌱 *Nueva consulta - DecorGrass Colombia*

👤 *Nombre:* ${data.name}
📱 *Teléfono:* ${data.phone}
📧 *Email:* ${data.email}`;

    if (data.projectType) {
      message += `
🏢 *Tipo de proyecto:* ${data.projectType}`;
    }

    if (data.area) {
      message += `
📐 *Área aproximada:* ${data.area}`;
    }

    message += `

💬 *Mensaje:*
${data.message}

_Enviado desde decorgrass.co_`;

    return message;
  };

  return {
    sendToWhatsApp,
    sendDefaultMessage,
    sendQuoteRequest,
    getFormattedContactMessage,
  };
};
