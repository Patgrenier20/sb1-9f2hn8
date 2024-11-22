import React, { useState } from 'react';
import { useProjectStore } from '../store/projectStore';
import { useAIStore } from '../store/aiStore';
import { AIClientFactory } from '../services/ai/factory';
import { Plus, RefreshCw, Settings } from 'lucide-react';
import AIProviderSelector from './AIProviderSelector';

const ProjectDashboard = () => {
  const { currentProject, addTask, updateTask } = useProjectStore();
  const { provider, apiKey } = useAIStore();
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleGenerateSchedule = async () => {
    if (!currentProject || !apiKey) return;
    
    setIsGenerating(true);
    try {
      const client = AIClientFactory.createClient(provider, { apiKey });
      const optimizedSchedule = await client.generateSchedule(
        currentProject.tasks,
        currentProject.milestones
      );
      
      optimizedSchedule.tasks.forEach((task: any) => {
        updateTask(currentProject.id, task);
      });
    } catch (error) {
      console.error('Failed to generate schedule:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!currentProject) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-600">No Project Selected</h2>
          <p className="text-gray-500 mt-2">Create or select a project to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{currentProject.name}</h1>
          <p className="text-gray-600 mt-1">{currentProject.description}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => {}}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Task
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Settings className="w-5 h-5" />
            AI Settings
          </button>
          <button
            onClick={handleGenerateSchedule}
            disabled={isGenerating || !apiKey}
            className={`flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ${
              (isGenerating || !apiKey) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
            {isGenerating ? 'Generating...' : 'Generate Schedule'}
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">AI Provider Settings</h2>
          <AIProviderSelector />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Tasks Overview</h2>
          <div className="space-y-4">
            {currentProject.tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 border rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{task.title}</h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      task.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : task.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Milestones</h2>
          <div className="space-y-4">
            {currentProject.milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="p-4 border rounded-lg hover:border-purple-500 transition-colors cursor-pointer"
              >
                <h3 className="font-medium">{milestone.title}</h3>
                <p className="text-sm text-gray-600">{milestone.description}</p>
                <div className="mt-2 text-sm text-gray-500">
                  {new Date(milestone.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;