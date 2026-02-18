"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Edit, Trash2 } from "lucide-react"

export type task = {
    id: string
    title: string
    description: string
    createdBy: string
    assignedTo: string
    status: "pending" | "in-progress" | "completed" | "not-started"
}

export const columns: ColumnDef<task>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "title",
        header: "Task",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "createdBy",
        header: "Created By",
    },
    {
        accessorKey: "assignedTo",
        header: "Assigned To",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const task = row.original

            const edit = () => {
                console.log(task.id)
            }

            return (
                <div className="flex gap-2">
                    {/* EDIT DIALOG */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                size="sm"
                                onClick={edit}
                                className="bg-yellow-300 hover:bg-yellow-600"
                                variant="outline"
                            >
                                <Edit />
                            </Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Task Details</DialogTitle>
                            </DialogHeader>

                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="font-bold">Task</span> : {task.title} <br />
                                    <span className="font-bold">Created By</span> : {task.createdBy} <br />
                                    <span className="font-bold">Assigned To</span> : {task.assignedTo}
                                </div>

                                <div>
                                    <span className="font-bold">Status</span> : {task.status} <br />
                                    <span className="font-bold">Description</span> : {task.description}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* DELETE DIALOG */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" variant="destructive">
                                <Trash2 />
                            </Button>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Delete Task</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete this task.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        },
    },
]
