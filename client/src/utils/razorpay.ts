import axios from "axios";

export const handlePayment = async (service: { title: string; price: number }) => {
    try {
        // Ensure apiUrl doesn't double up on /api
        let apiUrl = import.meta.env.VITE_API_URL;

        // Fallback or warning for production
        if (!apiUrl) {
            if (window.location.hostname !== "localhost") {
                console.error("CRITICAL: VITE_API_URL is missing in production build! Falling back to current origin.");
                apiUrl = window.location.origin; // Try to use same origin as fallback
            } else {
                apiUrl = "http://localhost:5000";
            }
        }

        if (apiUrl.endsWith("/api")) {
            apiUrl = apiUrl.replace(/\/api$/, "");
        }

        console.log("Current Environment:", import.meta.env.MODE);
        console.log("Initiating payment request to:", `${apiUrl}/api/orders`);

        // 1. Create Order on Backend
        const { data } = await axios.post(`${apiUrl}/api/orders`, {
            serviceName: service.title,
            amount: service.price,
            customerName: "Client",
            customerEmail: "client@example.com",
            customerPhone: "9999999999",
        });

        if (!data.key_id || !data.order) {
            throw new Error("Invalid response from server: Missing key_id or order");
        }

        const options = {
            key: data.key_id,
            amount: data.order.amount,
            currency: "INR",
            name: "Arun Kumar Bind",
            description: `Purchase: ${service.title}`,
            order_id: data.order.id,
            handler: async (response: any) => {
                try {
                    const verifyUrl = `${apiUrl}/api/orders/verify`;
                    const { data: verifyData } = await axios.post(verifyUrl, response);
                    if (verifyData.success) {
                        alert("Payment Successful! We will contact you soon.");
                        window.location.href = "/";
                    }
                } catch (error: any) {
                    console.error("Verification failed:", error.response?.data || error.message);
                    alert("Payment verification failed. Please contact support.");
                }
            },
            prefill: {
                name: "Client",
                email: "client@example.com",
                contact: "9999999999",
            },
            theme: {
                color: "#FF4D2D",
            },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    } catch (error: any) {
        console.error("Payment initiation failed details:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        alert(`Error initiating payment: ${error.response?.data?.message || error.message}`);
    }
};
