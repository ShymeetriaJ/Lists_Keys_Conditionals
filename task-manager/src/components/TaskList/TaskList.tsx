import { useState} from "react";
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
} 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([
        {
        id: '23',
        title: 'Study',
        description: 'study for JRA',
        status: 'in-progress',
        priority: 'medium',
        dueDate: 'December 12, 2025'
        }
    ]);


return (
    <div>
        <h1>My Tasks</h1>
    </div>
);
} 

