import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function GET() {
    try {
        await connectDB();
        const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json({ success: true, data: enquiries });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const { fullName, mobile, service, city } = body;

        // Server-side validation
        if (!fullName?.trim() || fullName.trim().length < 2) {
            return NextResponse.json(
                { success: false, error: "Invalid name" },
                { status: 400 }
            );
        }
        if (!/^\d{10}$/.test(mobile?.trim())) {
            return NextResponse.json(
                { success: false, error: "Invalid mobile number" },
                { status: 400 }
            );
        }
        if (!["website", "web-app", "mobile-app", "software"].includes(service)) {
            return NextResponse.json(
                { success: false, error: "Invalid service" },
                { status: 400 }
            );
        }
        if (!city?.trim() || city.trim().length < 2) {
            return NextResponse.json(
                { success: false, error: "Invalid city" },
                { status: 400 }
            );
        }

        const enquiry = await Enquiry.create({
            fullName: fullName.trim(),
            mobile: mobile.trim(),
            service,
            city: city.trim(),
        });

        return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
