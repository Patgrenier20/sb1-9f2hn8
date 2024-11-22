import React from 'react';
import { useProjectStore } from '../../store/projectStore';

const ProjectSelector = () => {
  const { projects, currentProject, setCurrentProject } = useProjectStore();

  return (
    <select
      value={currentProject?.id || ''}
      onChange={(e) => {
        const project = projects.find(p => p.id === e.target.value);
        if (project) setCurrentProject(project);
      }}
      className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    >
      <option value="">Select a project</option>
      {projects.map((project) => (
        <option key={project.id} value={project.id}>
          {project.name}
        </option>
      ))}
    </select>
  );
};

export default ProjectSelector;