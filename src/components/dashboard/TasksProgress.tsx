import React from 'react';
import { useProjectStore } from '../../store/projectStore';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#10B981', '#3B82F6', '#6B7280'];

const TasksProgress = () => {
  const { projects } = useProjectStore();

  const data = [
    {
      name: 'Completed',
      value: projects.reduce(
        (acc, project) =>
          acc + project.tasks.filter((t) => t.status === 'completed').length,
        0
      ),
    },
    {
      name: 'In Progress',
      value: projects.reduce(
        (acc, project) =>
          acc + project.tasks.filter((t) => t.status === 'in-progress').length,
        0
      ),
    },
    {
      name: 'Pending',
      value: projects.reduce(
        (acc, project) =>
          acc + project.tasks.filter((t) => t.status === 'pending').length,
        0
      ),
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Tasks Progress</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TasksProgress;