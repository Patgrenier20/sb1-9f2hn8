export type AIProvider = 'openai' | 'anthropic' | 'gemini';

export interface AIResponse {
  tasks: any[];
  suggestions?: string[];
  criticalPath?: string[];
}

export interface AIClientConfig {
  apiKey: string;
}