import dbConnect from "@/app/lib/mongodb";
import Contact from "@/app/models/Contact";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // 1. Connect to Database
    await dbConnect();

    // 2. Save to Database
    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // 3. Send Email
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    if (!emailUser || !emailPass || !receiverEmail) {
      console.warn("Email credentials missing. Skipping email notification.");
      return NextResponse.json(
        { message: "Message saved to database, but email notification failed due to missing server configuration." },
        { status: 200 } // We still return 200 because the message WAS saved to the DB.
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
