import mongoose, { model, models, Document } from "mongoose";

export interface Task {
    _id: string
    taskName: string
    createdBy: string
    assignedTo: string
    status: "pending" | "in-progress" | "completed" | "not-started"
    description: string
    createdAt: string
    updatedAt: string
    __v: number
}



const TaskSchema = new mongoose.Schema<Task>({
    taskName: { type: String, required: true },
    createdBy: { type: String, required: true },
    assignedTo: { type: String, required: true },
    status: {
        type: String,
        enum: ["pending", "in-progress", "completed", "not-started"],
        default: "not-started"
    },
    description: { type: String },

}, { timestamps: true })

const Task = models.Task || model<Task>("Task", TaskSchema)

export default Task