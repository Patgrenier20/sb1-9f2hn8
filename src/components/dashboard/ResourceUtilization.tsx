import React from 'react';
import { useProjectStore } from '../../store/projectStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ResourceUtilization = () => {
  const { projects } = useProjectStore();

  const resourceData = projects.flatMap(project =>
    project.tasks.map(task => task.assignedTo)
  ).flat();

  const data = Array.from(new Set(resourceData)).map(resource => ({
    name: resource,
    tasks: resourceData.filter(r => r === resource).length,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Resource Utilization</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tasks" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ResourceUtilization;