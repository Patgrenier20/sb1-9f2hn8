import { create } from 'zustand';
import { AIProvider } from '../services/ai/types';

interface AIState {
  provider: AIProvider;
  apiKey: string | null;
  setProvider: (provider: AIProvider) => void;
  setApiKey: (apiKey: string) => void;
}

export const useAIStore = create<AIState>((set) => ({
  provider: 'openai',
  apiKey: null,
  setProvider: (provider) => set({ provider }),
  setApiKey: (apiKey) => set({ apiKey }),
}));