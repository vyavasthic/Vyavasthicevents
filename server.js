// import mongoose from "mongoose";

// const MONGO_URI =
//   "mongodb+srv://arsalanshaikh66603:SKarsalan1two@cluster0.6apzq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Atlas connected"))
//   .catch((err) => console.error("MongoDB Atlas connection error:", err));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import *  as dotenv from 'dotenv';
dotenv.config();



// Connect to MongoDB
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB Atlas connection error:", err));

// Define the schema and model for form submissions
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  venue: String,
  guestCount: Number,
  budget: String,
  message: String,
  preferredTime: String,
  hearAboutUs: String,
});

const FormSubmission = mongoose.model("FormSubmission", formSchema);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post("/api/submit-form", async (req, res) => {
  try {
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();
    res.status(201).json({ message: "Form submission saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save form submission" });
  }
});


// const app = express();   
// app.use(cors());
// app.use(bodyParser.json());

const meetingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  venue: String,
  guestCount: String,
  message: String,
  meetingType: String,
});


// app.use(cors());
// app.use(bodyParser.json());

// Create Meeting Model
const Meeting = mongoose.model("Meeting", meetingSchema);

// API to handle form submissions
app.post("/api/meetings", async (req, res) => {
  try {
    const meetingData = req.body;

    // Save to MongoDB
    const meeting = new Meeting(meetingData);
    await meeting.save();

    res.status(201).json({ message: "Meeting data saved successfully" });
  } catch (err) {
    console.error("Error saving meeting data:", err);
    res.status(500).json({ error: "Failed to save meeting data" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
