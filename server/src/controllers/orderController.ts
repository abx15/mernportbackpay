import { Request, Response } from 'express';
import { getOrderConfirmationTemplate } from '../utils/emailTemplates.js';
import { Order } from '../models/Order.js';
import { razorpay } from '../utils/razorpay.js';
import { sendEmail } from '../utils/mailer.js';
import { sendTwilioMessage } from '../utils/twilio.js';
import crypto from 'crypto';

export const createOrder = async (req: Request, res: Response) => {
    const { serviceName, customerName, customerEmail, customerPhone, amount } = req.body;
    try {
        const options = {
            amount: amount * 100, // in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        const newOrder = new Order({
            serviceName,
            customerName,
            customerEmail,
            customerPhone,
            amount,
            orderId: order.id,
            status: 'pending'
        });
        await newOrder.save();

        res.json({ order, key_id: process.env.RAZORPAY_KEY_ID });
    } catch (error) {
        res.status(500).json({ message: 'Error creating Razorpay order' });
    }
};

export const verifyPayment = async (req: Request, res: Response) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(body.toString())
        .digest("hex");

    if (expectedSignature === razorpay_signature) {
        const order = await Order.findOneAndUpdate(
            { orderId: razorpay_order_id },
            { paymentId: razorpay_payment_id, status: 'completed' },
            { new: true }
        );

        if (order) {
            // Send notifications
            const textBody = `Hi ${order.customerName}, your order for ${order.serviceName} has been confirmed! Payment ID: ${order.paymentId}`;
            const htmlBody = getOrderConfirmationTemplate(order.customerName, order.serviceName, order.amount, order.paymentId || 'N/A');

            await sendEmail(order.customerEmail, 'Order Confirmed - Arun Kumar Bind', textBody, htmlBody);
            await sendTwilioMessage(order.customerPhone, textBody, true); // WhatsApp

            // Admin Alert
            await sendTwilioMessage(process.env.TWILIO_PHONE!, `New Order: ${order.serviceName} by ${order.customerName}`, true);
        }

        res.json({ success: true, message: 'Payment verified successfully' });
    } else {
        res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
};
