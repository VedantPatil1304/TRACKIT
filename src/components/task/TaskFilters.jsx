import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { Search, Filter } from 'lucide-react';

const TaskFilters = ({ filters, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localFilters, setLocalFilters] = useState({ ...filters });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };
  
  const handleReset = () => {
    const resetFilters = {
      status: 'all',
      priority: 'all',
      sort: 'newest',
      search: '',
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };
  
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex gap-2">
            <div className="w-full">
              <Input
                type="text"
                name="search"
                placeholder="Search tasks..."
                value={localFilters.search || ''}
                onChange={handleInputChange}
                leftIcon={<Search size={18} />}
                className="h-10 text-gray-700"
              />
            </div>
            <Button
            className='text-gray-600'
              type="button"
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              leftIcon={<Filter size={18} />}
              aria-expanded={isExpanded}
              aria-controls="filter-panel"
            >
              Filter
            </Button>
            <Button type="submit">Apply</Button>
          </div>
          
          {isExpanded && (
            <div
              id="filter-panel"
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200"
            >
              <Select
                className=" text-gray-500"
                id="status"
                name="status"
                label="Status"
                value={localFilters.status || 'all'}
                onChange={handleInputChange}
                options={[
                  { value: 'all', label: 'All Status' },
                  { value: 'todo', label: 'To Do' },
                  { value: 'in-progress', label: 'In Progress' },
                  { value: 'completed', label: 'Completed' },
                ]}
              />
              
              <Select
                className=" text-gray-500"
                id="priority"
                name="priority"
                label="Priority"
                value={localFilters.priority || 'all'}
                onChange={handleInputChange}
                options={[
                  { value: 'all', label: 'All Priorities' },
                  { value: 'low', label: 'Low' },
                  { value: 'medium', label: 'Medium' },
                  { value: 'high', label: 'High' },
                ]}
              />
              
              <Select
                className=" text-gray-500"
                id="sort"
                name="sort"
                label="Sort By"
                value={localFilters.sort || 'newest'}
                onChange={handleInputChange}
                options={[
                  { value: 'newest', label: 'Newest First' },
                  { value: 'oldest', label: 'Oldest First' },
                  { value: 'a-z', label: 'A-Z' },
                  { value: 'z-a', label: 'Z-A' },
                  { value: 'due-date', label: 'Due Date' },
                  { value: 'priority', label: 'Priority' },
                ]}
              />
              
              <div className="sm:col-span-3 text-gray-500">
                <Button type="button" variant="ghost" onClick={handleReset}>
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TaskFilters;
