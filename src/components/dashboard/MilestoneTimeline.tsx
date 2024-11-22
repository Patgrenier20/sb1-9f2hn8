import React from 'react';
import { useProjectStore } from '../../store/projectStore';
import { format } from 'date-fns';

const MilestoneTimeline = () => {
  const { projects } = useProjectStore();

  const allMilestones = projects.flatMap(project =>
    project.milestones.map(milestone => ({
      ...milestone,
      projectName: project.name,
    }))
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Milestone Timeline</h2>
      <div className="space-y-4">
        {allMilestones.map((milestone, index) => (
          <div
            key={milestone.id}
            className="flex items-start gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              {index < allMilestones.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200"></div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{milestone.title}</h3>
              <p className="text-sm text-gray-500">{milestone.projectName}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(milestone.date), 'MMM d, yyyy')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTimeline;