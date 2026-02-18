import { connectDB } from "@/lib/db"
import Task from "@/schemas/Taskschema"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        await connectDB()
        const body = await req.json()
        const data = await Task.create(body)

        return NextResponse.json({
            success: true,
            message: "Task Created Successfully",
            data,
        })
    } catch (error: any) {
        console.error("POST /api/task error:", error)
        const message = error instanceof Error ? error.message : "Task Create Error"
        return NextResponse.json({ success: false, message }, { status: 500 })
    }
}

export async function GET(req: Request) {
    try {
        await connectDB()
        const tasks = await Task.find().sort({ createdAt: -1 })
        return NextResponse.json({ success: true, data: tasks })
    } catch (error: any) {
        console.error("GET /api/task error:", error)
        const message = error instanceof Error ? error.message : "Failed to fetch tasks"
        return NextResponse.json({ success: false, message }, { status: 500 })
    }
}