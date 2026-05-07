import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

export async function GET(request, { params }) {
    try {
        await connectDB();
        const enquiry = await Enquiry.findById(params.id).lean();
        if (!enquiry) {
            return NextResponse.json(
                { success: false, error: "Enquiry not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: enquiry });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        await connectDB();
        const body = await request.json();
        const enquiry = await Enquiry.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        }).lean();
        if (!enquiry) {
            return NextResponse.json(
                { success: false, error: "Enquiry not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, data: enquiry });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const enquiry = await Enquiry.findByIdAndDelete(params.id).lean();
        if (!enquiry) {
            return NextResponse.json(
                { success: false, error: "Enquiry not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({ success: true, message: "Deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
