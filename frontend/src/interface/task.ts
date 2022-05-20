interface formData {
    text: string
    status: string
}

export interface Task extends formData {
    _id: string
    createdAt: string
    updatedAt: string
}

export interface Tasks {
    tasks: Task[]
}
export interface TaskContextType extends Tasks {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}