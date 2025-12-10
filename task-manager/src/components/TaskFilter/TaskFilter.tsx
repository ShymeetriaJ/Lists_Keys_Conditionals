import { useState } from "react";
import { TaskStatus } from "../TaskList/TaskList";

export interface TaskFilterProps {
  onFilterChange: (filters: {status?: TaskStatus; priority?: 'low' | 'medium' | 'high';
  }) => void;
}
export default function TaskFilter({onFilterChange}: TaskFilterProps) {
    const [selectedStatus, setSelectedStatus] = useState<TaskStatus>('in-progress');
    const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high'>('low');
    const handleFilter = () => { onFilterChange({status: selectedStatus, priority: selectedPriority});
    };
    return (
        <>
        <div>
            <div>
            <label>Status: </label>
            <select value={selectedStatus} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedStatus(e.target.value as TaskStatus);
                    handleFilter();}}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>    
        <div>
            <label>Priority: </label>
            <select 
                value={selectedPriority}
                onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedPriority(e.target.value as 'low' | 'medium' | 'high');
                    handleFilter();}}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        </div>
        </>
    )}