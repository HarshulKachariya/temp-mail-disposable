import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    reason: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "tempmail_email",
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("contact", contactSchema);

export default Contact;
