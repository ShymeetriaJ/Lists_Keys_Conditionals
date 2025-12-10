import type {Task, TaskStatus} from '../TaskList/TaskList'

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
export default function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {
    return (
        <div>
            <h2>{task.title}</h2>
            
            <p><strong>Description:</strong> {task.description}</p>
            
            <p><strong>Status:</strong> {task.status}</p>
            
            <p><strong>Priority:</strong> {task.priority}</p>
            
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <button onClick={() => onDelete(task.id)}>Delete Task</button>
        </div>
    );
}
    

