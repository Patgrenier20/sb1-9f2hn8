import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useProjectStore } from '../../store/projectStore';

const ProjectOverview = () => {
  const { projects } = useProjectStore();

  const data = projects.map(project => ({
    name: project.name,
    completed: project.tasks.filter(t => t.status === 'completed').length,
    inProgress: project.tasks.filter(t => t.status === 'in-progress').length,
    pending: project.tasks.filter(t => t.status === 'pending').length,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Project Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" stackId="a" fill="#10B981" />
            <Bar dataKey="inProgress" stackId="a" fill="#3B82F6" />
            <Bar dataKey="pending" stackId="a" fill="#6B7280" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectOverview;