import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { cn } from "../../utils/cn";

interface PaymentFormProps {
  serviceName: string;
  amount: number;
  onSuccess?: (orderId: string) => void;
  onError?: (error: string) => void;
  className?: string;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  serviceName,
  amount,
  onSuccess,
  onError,
  className,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate form
      if (
        !formData.customerName ||
        !formData.customerEmail ||
        !formData.customerPhone
      ) {
        throw new Error("Please fill in all fields");
      }

      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

      // Create order
      const orderResponse = await axios.post(`${apiUrl}/api/orders`, {
        serviceName,
        amount,
        ...formData,
      });

      const { order, key_id } = orderResponse.data;

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }

      // Initialize Razorpay
      const razorpay = new window.Razorpay({
        key: key_id,
        order_id: order.id,
        handler: async (response: RazorpayResponse) => {
          try {
            // Verify payment
            const verifyResponse = await axios.post(
              `${apiUrl}/api/orders/verify`,
              response
            );

            if (verifyResponse.data.success) {
              setSuccess(true);
              onSuccess?.(order.id);
              setTimeout(() => {
                setFormData({
                  customerName: "",
                  customerEmail: "",
                  customerPhone: "",
                });
                setSuccess(false);
              }, 3000);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (err: any) {
            setError(err.message || "Payment verification failed");
            onError?.(err.message || "Payment verification failed");
          }
        },
        prefill: {
          name: formData.customerName,
          email: formData.customerEmail,
          contact: formData.customerPhone,
        },
        theme: {
          color: "#3B82F6",
        },
      });

      razorpay.open();
    } catch (err: any) {
      const errorMessage = err.message || "Payment failed";
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "w-full max-w-md bg-gradient-to-br from-white to-blue-50/30 rounded-3xl border border-gray-200/50 p-8 shadow-xl",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <CreditCard className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-black text-foreground text-lg">
            Secure Payment
          </h3>
          <p className="text-xs text-muted-foreground">
            Powered by Razorpay
          </p>
        </div>
      </div>

      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-bold text-green-900">Payment Successful!</p>
            <p className="text-xs text-green-700">
              Check your email for confirmation
            </p>
          </div>
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600" />
          <div>
            <p className="font-bold text-red-900">Payment Failed</p>
            <p className="text-xs text-red-700">{error}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handlePayment} className="space-y-5">
        {/* Service Details */}
        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Service
          </p>
          <p className="font-black text-foreground mb-3">{serviceName}</p>
          <div className="flex items-baseline justify-between">
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-3xl font-black text-primary">
              ₹{amount}
              <span className="text-xs text-muted-foreground ml-1">INR</span>
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="customerPhone"
              value={formData.customerPhone}
              onChange={handleInputChange}
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={cn(
            "w-full py-3 rounded-xl font-black uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-2",
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg hover:shadow-primary/40"
          )}
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Pay ₹{amount}
            </>
          )}
        </motion.button>

        <p className="text-xs text-center text-muted-foreground">
          💳 Secure payment processed by Razorpay
        </p>
      </form>
    </motion.div>
  );
};

export default PaymentForm;
