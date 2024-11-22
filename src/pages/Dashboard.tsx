import React from 'react';
import { useProjectStore } from '../store/projectStore';
import ProjectOverview from '../components/dashboard/ProjectOverview';
import TasksProgress from '../components/dashboard/TasksProgress';
import MilestoneTimeline from '../components/dashboard/MilestoneTimeline';
import ResourceUtilization from '../components/dashboard/ResourceUtilization';

const Dashboard = () => {
  const { projects } = useProjectStore();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{projects.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">Active Tasks</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {projects.reduce((acc, project) => 
              acc + project.tasks.filter(task => task.status === 'in-progress').length, 0
            )}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">Upcoming Milestones</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {projects.reduce((acc, project) => 
              acc + project.milestones.filter(m => new Date(m.date) > new Date()).length, 0
            )}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">Completion Rate</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {projects.length > 0
              ? Math.round(
                  (projects.reduce(
                    (acc, project) =>
                      acc +
                      project.tasks.filter((task) => task.status === 'completed')
                        .length,
                    0
                  ) /
                    projects.reduce((acc, project) => acc + project.tasks.length, 0)) *
                    100
                )
              : 0}
            %
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectOverview />
        <TasksProgress />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MilestoneTimeline />
        <ResourceUtilization />
      </div>
    </div>
  );
};

export default Dashboard;