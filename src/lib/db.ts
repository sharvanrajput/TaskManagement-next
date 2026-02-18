// src/lib/db.ts

import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_URI

export async function connectDB() {
    if (!MONGODB_URI) {
        console.error("MONGO_URI is not set in environment variables")
        throw new Error("MONGO_URI not set")
    }

    if (mongoose.connection.readyState >= 1) return

    try {
        await mongoose.connect(MONGODB_URI)
        console.log("MongoDB connected")
    } catch (err) {
        console.error("MongoDB connection error:", err)
        throw err
    }
}
