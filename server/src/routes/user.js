const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Trial = mongoose.model("Trial");
const nodemailer = require("nodemailer");

// Define a route for creating a new record
router.post("/trial/new", async (req, res) => {
  try {
    const { name, email, grade, subject, time, date,phone,country} = req.body;

    // Create a new Trial document
    const newTrial = new Trial({
      name,
      phone,
      country,
      email,
      grade,
      subject,
      time,
      date,
    });

    // Save the new document to the database
    await newTrial.save();

    // Log the record details
    console.log(name, email, grade, subject, time, date,phone,country);

    // Send an email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: "ahujalakshita172@gmail.com",
      to:[ "lakshitaahuja656@gmail.com","ahujautkarsh80@gmail.com"],
      subject: "New Trial Class Booked",
      text: `A new trial record has been created:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCountry: ${country}\nGrade: ${grade}\nSubject: ${subject}\nTime: ${time}\nDate: ${date}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({ message: "Record created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
