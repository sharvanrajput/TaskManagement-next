import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
const CreateTask = () => {
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
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
                            <div>
                                <Label htmlFor='create' className='mb-2'>Task Created By</Label>
                                <Input id='create' type='text' />
                            </div>
                            <div>
                                <Label htmlFor='assign' className='mb-2'>Task Assign To</Label>
                                <Input id='assign' type='text' />
                            </div>
                            <div>
                                <Label htmlFor='name' className='mb-2'>Task Name</Label>
                                <Input id='name' type='text' />
                            </div>
                            <div>
                                <Label htmlFor='status' className='mb-2'>Task Status</Label>
                                <Select value={"not-started"}>
                                    <SelectTrigger className="w-full" id='status'>
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
                        <div className='mb-5'>
                            <Label htmlFor='desc' className='mb-2'>Task Description</Label>
                            <Textarea id='desc' />
                        </div>
                        <div className='flex gap-3'>
                            <Button>Create </Button>
                            <Button variant={"outline"}>Create </Button>
                        </div>


                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default CreateTask