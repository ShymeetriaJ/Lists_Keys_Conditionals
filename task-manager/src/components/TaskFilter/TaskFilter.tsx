import { useState } from "react";
import { TaskStatus } from "../TaskList/TaskList";

export interface TaskFilterProps {
  onFilterChange: (filters: {status?: TaskStatus; priority?: 'low' | 'medium' | 'high';
  }) => void;
}
export default function TaskFilter({onFilterChange}: TaskFilterProps) {
    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newOption = event.target.value 
        onFilterChange(newOption)
    }
    return (
        <div>
            <button onFilterChange={handleFilter} ></button>
        </div>
    )}