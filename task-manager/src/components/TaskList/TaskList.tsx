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
        dueDate: '12-01-2025'
        },
    ]);
return (<div style={{ padding: '20px' }}>
            <h1 style={{ color: '#333'}} >My Tasks</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {tasks.map((task) => (
                    <div 
                        key={task.id} 
                        style={{ 
                            border: '1px solid #ccc', 
                            padding: '15px', 
                            borderRadius: '8px',
                            backgroundColor: '#f9f9f9'
                        }}
                    >
                        <h2 style={{color: '#222', marginTop: 0}} >{task.title}</h2>
                        <p><strong>Description:</strong> {task.description}</p>
                        <p><strong>Status:</strong> {task.status}</p>
                        <p><strong>Priority:</strong> {task.priority}</p>
                        <p><strong>Due Date:</strong> {task.dueDate}</p>
                    </div>
                ))}
            </div>
        </div>
        );
} 

