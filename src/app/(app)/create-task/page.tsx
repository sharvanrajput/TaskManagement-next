"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { TaskFormData, TaskStatus } from '@/types/interface'







const CreateTask = () => {

    const [formData, setFormData] = useState<TaskFormData>({
        createdBy: "",
        assignedTo: "",
        taskName: "",
        status: "not-started",
        description: "",
    })

    // handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    // handle select change
    const handleStatusChange = (value: TaskStatus) => {
        setFormData(prev => ({
            ...prev,
            status: value,
        }))
    }

    // submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log("✅ Task Data:", formData)
        try {
            const res = await axios.post("/api/task")
            console.log(res)
            if (res.data.success) {
                toast.success("Task Created Success Fully")
            }
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }



    return (
        <section >
            <div className="">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Create Task
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
                                        <div>
                                            <Label className="mb-2">Task Created By</Label>
                                            <Input
                                                name="createdBy"
                                                value={formData.createdBy}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <Label className="mb-2">Task Assign To</Label>
                                            <Input
                                                name="assignedTo"
                                                value={formData.assignedTo}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <Label className="mb-2">Task Name</Label>
                                            <Input
                                                name="taskName"
                                                value={formData.taskName}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div>
                                            <Label className="mb-2">Task Status</Label>
                                            <Select
                                                value={formData.status}
                                                onValueChange={handleStatusChange}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="pending">Pending</SelectItem>
                                                        <SelectItem value="in-progress">In Progress</SelectItem>
                                                        <SelectItem value="completed">Completed</SelectItem>
                                                        <SelectItem value="not-started">Not Started</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <Label className="mb-2">Task Description</Label>
                                        <Textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <Button type="submit">Create</Button>
                                        <Button
                                            type="button"
                                            variant="outline"

                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </form>

                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default CreateTask