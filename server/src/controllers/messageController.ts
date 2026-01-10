import { Request, Response } from 'express';
import { Message } from '../models/Message.js';
import { sendEmail } from '../utils/mailer.js';
import { getContactNotificationTemplate } from '../utils/emailTemplates.js';

export const sendMessage = async (req: Request, res: Response) => {
    const { name, email, subject, message: content } = req.body;
    try {
        const newMessage = new Message({ name, email, subject, message: content });
        await newMessage.save();

        // Send email to admin
        await sendEmail(
            process.env.EMAIL_USER!,
            `New Message: ${subject || 'Contact Form'}`,
            `From: ${name} (${email})\n\nMessage: ${content}`,
            getContactNotificationTemplate(name, email, content)
        );

        // Send confirmation to user
        await sendEmail(
            email,
            'Message Received - Arun Kumar Bind',
            `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest regards,\nArun Kumar Bind`
        );

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending message' });
    }
};

export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages' });
    }
};
