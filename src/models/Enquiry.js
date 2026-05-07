import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
            minlength: 2,
        },
        mobile: {
            type: String,
            required: [true, "Mobile number is required"],
            trim: true,
            match: [/^\d{10}$/, "Enter a valid 10-digit mobile number"],
        },
        service: {
            type: String,
            required: [true, "Service is required"],
            enum: ["website", "web-app", "mobile-app", "software"],
        },
        city: {
            type: String,
            required: [true, "City is required"],
            trim: true,
            minlength: 2,
        },
        status: {
            type: String,
            enum: ["new", "contacted", "closed"],
            default: "new",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Enquiry ||
    mongoose.model("Enquiry", EnquirySchema);
