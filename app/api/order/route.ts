import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ["nghealthify@gmail.com", "wonderhub.dev@gmail.com"],
      subject: "🛒 New Order Placed 🎉",
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>New Order</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 15px;background:#f5f7fb;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.08);">

<!-- Header -->
<tr>
<td
style="padding:35px;background:black;color:gold;text-align:center;">

<h1 style="margin:0;font-size:28px;">
🛒 New Product Order
</h1>

<p style="margin:10px 0 0;font-size:15px;opacity:.9;">
A customer has just placed a new order.
</p>

</td>
</tr>

<!-- Order Summary -->
<tr>
<td style="padding:30px;">

<h2 style="margin-top:0;color:#111827;">
📦 Order Summary
</h2>

<table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

<tr style="background:#f9fafb;">
<td><strong>Product</strong></td>
<td align="right">${data.productName}</td>
</tr>

<tr>
<td><strong>Price</strong></td>
<td align="right">₦${Number(data.productPrice).toLocaleString()}</td>
</tr>

<tr style="background:#f9fafb;">
<td><strong>Quantity</strong></td>
<td align="right">${data.quantity}</td>
</tr>

<tr>
<td><strong>Selected Color</strong></td>
<td align="right">${data.color}</td>
</tr>

<tr style="background:#eff6ff;font-size:18px;font-weight:bold;">
<td>Total Amount</td>
<td align="right">
₦${Number(data.total).toLocaleString()}
</td>
</tr>

</table>

</td>
</tr>

<!-- Customer -->
<tr>
<td style="padding:0 30px 30px;">

<h2 style="margin-bottom:18px;color:#111827;">
👤 Customer Information
</h2>

<table width="100%" cellpadding="10" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;">

<tr>
<td width="35%" style="background:#f9fafb;"><strong>Full Name</strong></td>
<td>${data.fullname}</td>
</tr>

<tr>
<td style="background:#f9fafb;"><strong>Email</strong></td>
<td>${data.email || "-"}</td>
</tr>

<tr>
<td style="background:#f9fafb;"><strong>Phone</strong></td>
<td>${data.phone_number}</td>
</tr>

<tr>
<td style="background:#f9fafb;"><strong>Address</strong></td>
<td>${data.address}</td>
</tr>

<tr>
<td style="background:#f9fafb;"><strong>Town</strong></td>
<td>${data.town}</td>
</tr>

<tr>
<td style="background:#f9fafb;"><strong>State</strong></td>
<td>${data.state}</td>
</tr>

</table>

</td>
</tr>

<!-- Delivery Notice -->
<tr>
<td style="padding:0 30px 30px;">

<div style="
background:#fff7ed;
padding:18px;
border-radius:8px;
">

<strong style="color:#9a3412;">
🚚 Delivery Reminder
</strong>

<p style="margin:8px 0 0;color:#7c2d12;line-height:1.6;">
Contact the customer as soon as possible to confirm the order and arrange delivery.
</p>

</div>

</td>
</tr>

<!-- Footer -->
<tr>
<td
style="
background:#111827;
padding:25px;
text-align:center;
color:#d1d5db;
font-size:13px;
">

<p style="margin:0;">
This email was automatically generated from Timeless Luxury website.
</p>

<p style="margin:10px 0 0;">
© ${new Date().getFullYear()} TIMELESS LUXURY. All rights reserved.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("server err", error);

    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
}
