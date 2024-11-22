import React from 'react';
import { useProjectStore } from '../store/projectStore';
import MilestoneList from '../components/milestones/MilestoneList';

const Milestones = () => {
  const { projects } = useProjectStore();
  const allMilestones = projects.flatMap(project => 
    project.milestones.map(milestone => ({
      ...milestone,
      projectName: project.name
    }))
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Milestones</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <MilestoneList milestones={allMilestones} />
      </div>
    </div>
  );
};

export default Milestones;