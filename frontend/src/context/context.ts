import { createContext } from 'react';
import { TaskContextType } from '../interface/task';

const Context = createContext<TaskContextType | null>(null);

export default Context;
