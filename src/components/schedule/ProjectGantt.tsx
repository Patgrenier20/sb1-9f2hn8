import React from 'react';
import { ResponsiveGantt } from '@nivo/gantt';
import { Project } from '../../types/project';
import { format } from 'date-fns';

interface ProjectGanttProps {
  project: Project;
}

const ProjectGantt = ({ project }: ProjectGanttProps) => {
  const data = project.tasks.map(task => ({
    id: task.id,
    data: {
      id: task.id,
      name: task.title,
      start: new Date(task.startDate),
      end: new Date(task.endDate),
      status: task.status,
    },
  }));

  return (
    <div className="h-[600px]">
      <ResponsiveGantt
        data={data}
        renderChart={true}
        margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: '%b %d',
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: '%b %d',
        }}
        tooltipFormat={(value) => format(value, 'PPP')}
      />
    </div>
  );
};

export default ProjectGantt;