export const getOrderConfirmationTemplate = (customerName: string, serviceName: string, amount: number, paymentId: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background: #FF4D2D; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 20px; }
        .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
        .button { display: inline-block; padding: 10px 20px; background: #FF4D2D; color: white; text-decoration: none; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Order Confirmed!</h1>
        </div>
        <div class="content">
            <p>Hi <strong>${customerName}</strong>,</p>
            <p>Thank you for choosing my services. Your payment for <strong>${serviceName}</strong> has been successfully processed.</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p><strong>Service:</strong> ${serviceName}</p>
                <p><strong>Amount:</strong> ₹${amount}</p>
                <p><strong>Payment ID:</strong> ${paymentId}</p>
            </div>
            <p>I will start working on your request immediately and will get in touch with you shortly.</p>
            <p>If you have any questions, feel free to reply to this email.</p>
            <p>Best Regards,<br><strong>Arun Kumar Bind</strong></p>
        </div>
        <div class="footer">
            <p>&copy; 2026 Arun Kumar Bind. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const getContactNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; }
        .header { background: #333; color: #fff; padding: 10px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header"><h2>New Contact Message</h2></div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f4f4f4; padding: 10px;">${message}</div>
    </div>
</body>
</html>
`;
