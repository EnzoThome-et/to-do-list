import { Dispatch, SetStateAction } from 'react';

export interface Task {
    _id: string
    text: string
    status: string
    createdAt: string
    updatedAt: string
}

export interface TaskContextType {
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<never[]>>
}