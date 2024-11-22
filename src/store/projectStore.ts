import { create } from 'zustand';
import { Project, Task, Milestone } from '../types/project';
import { sampleProjects } from '../data/sampleData';

interface ProjectState {
  projects: Project[];
  currentProject: Project | null;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  addTask: (projectId: string, task: Task) => void;
  updateTask: (projectId: string, task: Task) => void;
  addMilestone: (projectId: string, milestone: Milestone) => void;
  setCurrentProject: (project: Project) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: sampleProjects,
  currentProject: sampleProjects[0],
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  updateProject: (project) =>
    set((state) => ({
      projects: state.projects.map((p) => (p.id === project.id ? project : p)),
    })),
  addTask: (projectId, task) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? { ...p, tasks: [...p.tasks, task] } : p
      ),
    })),
  updateTask: (projectId, task) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map((t) => (t.id === task.id ? task : t)),
            }
          : p
      ),
    })),
  addMilestone: (projectId, milestone) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? { ...p, milestones: [...p.milestones, milestone] }
          : p
      ),
    })),
  setCurrentProject: (project) => set({ currentProject: project }),
}));