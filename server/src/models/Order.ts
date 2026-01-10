import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentId: { type: String },
    orderId: { type: String },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
}, { timestamps: true });

export const Order = mongoose.model('Order', OrderSchema);
