import { Project } from '../types/project';
import { v4 as uuidv4 } from 'uuid';

export const sampleProjects: Project[] = [
  {
    id: uuidv4(),
    name: "Downtown Office Complex",
    description: "15-story commercial building with underground parking",
    startDate: new Date('2024-03-01'),
    endDate: new Date('2025-06-30'),
    tasks: [
      {
        id: uuidv4(),
        title: "Site Preparation",
        description: "Clear site and establish construction perimeter",
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-03-15'),
        status: 'completed',
        dependencies: [],
        assignedTo: ['John Smith', 'Mike Johnson'],
        priority: 'high'
      },
      {
        id: uuidv4(),
        title: "Foundation Work",
        description: "Excavation and foundation pouring",
        startDate: new Date('2024-03-16'),
        endDate: new Date('2024-04-30'),
        status: 'in-progress',
        dependencies: ['Site Preparation'],
        assignedTo: ['Robert Wilson', 'Sarah Chen'],
        priority: 'high'
      },
      {
        id: uuidv4(),
        title: "Steel Structure",
        description: "Erection of main steel framework",
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-07-30'),
        status: 'pending',
        dependencies: ['Foundation Work'],
        assignedTo: ['David Miller', 'James Brown'],
        priority: 'high'
      }
    ],
    milestones: [
      {
        id: uuidv4(),
        title: "Foundation Complete",
        date: new Date('2024-04-30'),
        description: "Foundation work finished and inspected",
        relatedTasks: ['Foundation Work']
      },
      {
        id: uuidv4(),
        title: "Structure Complete",
        date: new Date('2024-07-30'),
        description: "Steel structure erected and inspected",
        relatedTasks: ['Steel Structure']
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Riverside Residential",
    description: "Luxury apartment complex with 200 units",
    startDate: new Date('2024-04-01'),
    endDate: new Date('2025-08-31'),
    tasks: [
      {
        id: uuidv4(),
        title: "Environmental Assessment",
        description: "Complete environmental impact study",
        startDate: new Date('2024-04-01'),
        endDate: new Date('2024-04-15'),
        status: 'completed',
        dependencies: [],
        assignedTo: ['Emily Wong', 'Lisa Anderson'],
        priority: 'high'
      },
      {
        id: uuidv4(),
        title: "Site Preparation",
        description: "Land clearing and initial groundwork",
        startDate: new Date('2024-04-16'),
        endDate: new Date('2024-05-15'),
        status: 'in-progress',
        dependencies: ['Environmental Assessment'],
        assignedTo: ['John Smith', 'Mike Johnson'],
        priority: 'high'
      }
    ],
    milestones: [
      {
        id: uuidv4(),
        title: "Environmental Clearance",
        date: new Date('2024-04-15'),
        description: "Environmental assessment approved",
        relatedTasks: ['Environmental Assessment']
      }
    ]
  },
  {
    id: uuidv4(),
    name: "City Center Mall",
    description: "Modern shopping complex with entertainment facilities",
    startDate: new Date('2024-05-01'),
    endDate: new Date('2025-12-31'),
    tasks: [
      {
        id: uuidv4(),
        title: "Design Finalization",
        description: "Complete architectural and engineering designs",
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-06-15'),
        status: 'in-progress',
        dependencies: [],
        assignedTo: ['Sarah Chen', 'David Miller'],
        priority: 'high'
      }
    ],
    milestones: [
      {
        id: uuidv4(),
        title: "Design Approval",
        date: new Date('2024-06-15'),
        description: "Final designs approved by city planning",
        relatedTasks: ['Design Finalization']
      }
    ]
  }
];