import React from 'react';
import { format } from 'date-fns';
import { Milestone } from '../../types/project';

interface MilestoneListProps {
  milestones: (Milestone & { projectName: string })[];
}

const MilestoneList = ({ milestones }: MilestoneListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Milestone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Related Tasks
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {milestones.map((milestone) => (
            <tr key={milestone.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="text-sm font-medium text-gray-900">{milestone.title}</div>
                <div className="text-sm text-gray-500">{milestone.description}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{milestone.projectName}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {format(new Date(milestone.date), 'MMM d, yyyy')}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {milestone.relatedTasks.length} tasks
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MilestoneList;