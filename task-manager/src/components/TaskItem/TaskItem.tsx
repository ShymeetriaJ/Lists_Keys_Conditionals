import type {Task, TaskStatus} from '../TaskList/TaskList'

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
export default function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {
    return (
        <div style={{
        border: task.priority === 'high' ? '3px solid red' : '1px solid #ccc',
        backgroundColor: task.status === 'completed' ? '#d4edda' : '#ffffff',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '10px'
        }}>
            <h2>{task.title}</h2>
            <p><strong>Description:</strong> {task.description}</p>
        <div>
        <label>Status: </label>
            <select 
                value={task.status}
                onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
             </select>
        </div>
            
            <p>
                <strong>Priority:</strong> 
                <span style={{
                color: task.priority === 'high' ? 'red' : 
                        task.priority === 'medium' ? 'orange' : 'green',
                    fontWeight: 'bold',
                    marginLeft: '5px'
            }}>
                {task.priority.toLocaleUpperCase()} 
                </span>
            </p>
            
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            {task.priority === 'high' && (
                <p style={{ color: 'red', fontWeight: 'bold' }}>Extreme Importance</p>
            )}
            {task.status === 'completed' && (
                <p style={{ color: 'green', fontWeight: 'bold' }}>Task Completed</p>
            )}
            <button onClick={() => onDelete(task.id)}>Delete Task</button>
        </div>
    );
}
    

