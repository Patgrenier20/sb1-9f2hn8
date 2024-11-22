import React from 'react';
import { useAIStore } from '../store/aiStore';
import { AIProvider } from '../services/ai/types';

const AIProviderSelector = () => {
  const { provider, setProvider, apiKey, setApiKey } = useAIStore();

  const providers: { value: AIProvider; label: string }[] = [
    { value: 'openai', label: 'OpenAI GPT-4' },
    { value: 'anthropic', label: 'Anthropic Claude' },
    { value: 'gemini', label: 'Google Gemini' },
  ];

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="ai-provider" className="block text-sm font-medium text-gray-700">
          AI Provider
        </label>
        <select
          id="ai-provider"
          value={provider}
          onChange={(e) => setProvider(e.target.value as AIProvider)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {providers.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="api-key" className="block text-sm font-medium text-gray-700">
          API Key
        </label>
        <input
          type="password"
          id="api-key"
          value={apiKey || ''}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder={`Enter ${provider} API key`}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default AIProviderSelector;