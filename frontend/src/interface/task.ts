

interface formData {
    text: string
    status: string
}

export interface Task extends formData {
    _id: string
    createdAt: string
    updatedAt: string
}
export interface TaskContextType {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}