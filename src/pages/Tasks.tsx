import React from 'react';
import { useProjectStore } from '../store/projectStore';
import TaskList from '../components/tasks/TaskList';
import TaskFilters from '../components/tasks/TaskFilters';

const Tasks = () => {
  const { projects } = useProjectStore();
  const allTasks = projects.flatMap(project => 
    project.tasks.map(task => ({
      ...task,
      projectName: project.name
    }))
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <TaskFilters />
        <TaskList tasks={allTasks} />
      </div>
    </div>
  );
};

export default Tasks;