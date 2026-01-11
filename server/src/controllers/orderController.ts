import { Request, Response } from 'express';
import { getOrderConfirmationTemplate } from '../utils/emailTemplates.js';
import { Order } from '../models/Order.js';
import { razorpay } from '../utils/razorpay.js';
import { sendEmail } from '../utils/mailer.js';
import { sendTwilioMessage } from '../utils/twilio.js';
import crypto from 'crypto';

export const createOrder = async (req: Request, res: Response) => {
    const { serviceName, customerName, customerEmail, customerPhone, amount } = req.body;

    // Validate required fields
    if (!serviceName || !customerName || !customerEmail || !customerPhone || !amount) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Check if Razorpay is configured
    if (!razorpay) {
        return res.status(500).json({ message: 'Payment service not configured. Please contact admin.' });
    }

    // Validate Environment Variables
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        console.error("FATAL: Razorpay credentials missing in process.env");
        return res.status(500).json({ message: 'Server configuration error: Razorpay credentials missing' });
    }

    try {
        const options = {
            amount: amount * 100, // in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                serviceName,
                customerName,
                customerEmail,
            }
        };

        console.log("Creating Razorpay order with options:", { ...options, notes: { serviceName } });
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

        res.status(201).json({ 
            order, 
            key_id: process.env.RAZORPAY_KEY_ID,
            message: 'Order created successfully'
        });
    } catch (error: any) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).json({
            message: 'Error creating Razorpay order',
            details: error.message
        });
    }
};

export const verifyPayment = async (req: Request, res: Response) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ success: false, message: 'Missing payment details' });
    }

    try {
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

                try {
                    await sendEmail(order.customerEmail, 'Order Confirmed - Arun Kumar Bind', textBody, htmlBody);
                } catch (emailError) {
                    console.warn('Email notification failed:', emailError);
                }

                // Send WhatsApp message (optional)
                if (process.env.TWILIO_PHONE) {
                    try {
                        await sendTwilioMessage(order.customerPhone, textBody, true);
                    } catch (whatsappError) {
                        console.warn('WhatsApp notification failed:', whatsappError);
                    }
                }
            }

            res.status(200).json({ success: true, message: 'Payment verified successfully', order });
        } else {
            res.status(400).json({ success: false, message: 'Invalid payment signature' });
        }
    } catch (error: any) {
        console.error('Error verifying payment:', error);
        res.status(500).json({
            success: false,
            message: 'Payment verification failed',
            details: error.message
        });
    }
};
