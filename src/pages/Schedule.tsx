import React from 'react';
import { useProjectStore } from '../store/projectStore';
import ProjectGantt from '../components/schedule/ProjectGantt';
import ProjectSelector from '../components/schedule/ProjectSelector';

const Schedule = () => {
  const { currentProject } = useProjectStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
        <ProjectSelector />
      </div>

      {currentProject ? (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <ProjectGantt project={currentProject} />
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Select a project to view its schedule</p>
        </div>
      )}
    </div>
  );
};

export default Schedule;