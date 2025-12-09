import type {Task, TaskStatus} from '../TaskList/TaskList'

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
export default function TaskItem({Task, onStatusChange, onDelete}: TaskItemProps) {
    return (
        <div>
            <h2>{Task.title}</h2>
            
            <p><strong>Description:</strong> {Task.description}</p>
            
            <p><strong>Status:</strong> {Task.status}</p>
            
            <p><strong>Priority:</strong> {Task.priority}</p>
            
            <p><strong>Due Date:</strong> {Task.dueDate}</p>
        </div>
    );
}
    

