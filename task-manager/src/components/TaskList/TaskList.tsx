import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "../TaskItem/TaskItem";
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
        {
        id: 'A86',
        title: 'Replace the brakes',
        description: 'Buy brakes and brake pads',
        status: 'pending',
        priority: 'high',
        dueDate: '12-16-2025'
        },
        {
        id: 'B2K',
        title: 'Workout',
        description: 'Go to the gym for leg day',
        status: 'completed',
        priority: 'low',
        dueDate: '12-10-2025'
        },

    ]);
    const [filters, setFilters] = useState<{status?: TaskStatus; priority?: 'low' | 'medium' | 'high';}>({});
    const handleFilterChange = (newFilters:{status?: TaskStatus; priority?: 'low' | 'medium' | 'high';}) => {
        setFilters(newFilters);
    };
    const filteredTasks = tasks.filter (task => {
        const matchesStatus = filters.status ? task.status === filters.status : true;
        const matchesPriority = filters.priority ? task.priority === filters.priority : true;
        return matchesStatus && matchesPriority;
    });
    const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {console.log(`Change task ${taskId} to ${newStatus}`);
    };
    const handleDelete = (taskId: string) => {console.log(`Deleting task ${taskId}`);
    };   
return (
    <div>
        <h1>My Tasks</h1>
        
        <TaskFilter onFilterChange={handleFilterChange} />
        
        <div>
            {filteredTasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    </div>
);
}