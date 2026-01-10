import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

export const sendTwilioMessage = async (to: string, body: string, isWhatsApp: boolean = false) => {
    const from = isWhatsApp ? `whatsapp:${process.env.TWILIO_PHONE}` : process.env.TWILIO_PHONE;
    const toFormatted = isWhatsApp ? `whatsapp:${to}` : to;

    try {
        await client.messages.create({
            body,
            from,
            to: toFormatted,
        });
        console.log(`Twilio message sent to ${to}`);
    } catch (error) {
        console.error('Error sending Twilio message:', error);
        // Don't throw error to avoid blocking the main flow if Twilio fails
    }
};
