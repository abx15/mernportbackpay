import axios from "axios";

export const handlePayment = async (service: { title: string; price: number }) => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

        // 1. Create Order on Backend
        const { data } = await axios.post(`${apiUrl}/api/orders`, {
            serviceName: service.title,
            amount: service.price,
            customerName: "Client", // Should be fetched from profile/form
            customerEmail: "client@example.com", // Should be fetched from profile/form
            customerPhone: "9999999999", // Should be fetched from profile/form
        });

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
                        window.location.href = "/"; // Or a success page
                    }
                } catch (error) {
                    console.error("Verification failed", error);
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
    } catch (error) {
        console.error("Payment failed", error);
        alert("Error initiating payment. Please try again.");
    }
};
