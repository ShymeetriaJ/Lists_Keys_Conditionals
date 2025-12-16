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
        dueDate: '12-17-2025'
        },
        {
        id: '32',
        title: 'Study',
        description: 'study for JRA',
        status: 'in-progress',
        priority: 'high',
        dueDate: '12-01-2025'
        },
        {
        id: '7h5d',
        title: 'Clean the house',
        description: 'Clean all rooms and floors',
        status: 'in-progress',
        priority: 'low',
        dueDate: '01-01-2025'
        },
        {
        id: '309U',
        title: 'Flight to Denver',
        description: 'Checkin for flight',
        status: 'pending',
        priority: 'low',
        dueDate: '12-30-2025'
        },
        {
        id: '86TF',
        title: 'Get new tires',
        description: 'Drive to Costco for tires',
        status: 'pending',
        priority: 'medium',
        dueDate: '12-10-2025'
        },
        {
        id: '98UY',
        title: 'Wash clothes',
        description: 'Get clothes from closets',
        status: 'completed',
        priority: 'high',
        dueDate: '12-19-2025'
        },
        {
        id: '54W3',
        title: 'Phone calls',
        description: 'Call all tenants',
        status: 'completed',
        priority: 'medium',
        dueDate: '12-29-2025'
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
    const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus} : task
        ));
    };
    
    const handleDelete = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId));
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