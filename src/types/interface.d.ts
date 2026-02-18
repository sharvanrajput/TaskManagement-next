type TaskStatus = "pending" | "in-progress" | "completed" | "not-started"
export interface TaskFormData {
    _id?: string
    taskName: string
    createdBy: string
    assignedTo: string
    status: "pending" | "in-progress" | "completed" | "not-started"
    description: string
    createdAt?: string
    updatedAt?: string
    __v?: number
}
