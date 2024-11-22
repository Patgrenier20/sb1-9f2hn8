import { AIProvider, AIClientConfig } from './types';
import { OpenAIClient } from './providers/openai';
import { AnthropicClient } from './providers/anthropic';
import { GeminiClient } from './providers/gemini';

export class AIClientFactory {
  static createClient(provider: AIProvider, config: AIClientConfig) {
    switch (provider) {
      case 'openai':
        return new OpenAIClient(config);
      case 'anthropic':
        return new AnthropicClient(config);
      case 'gemini':
        return new GeminiClient(config);
      default:
        throw new Error(`Unsupported AI provider: ${provider}`);
    }
  }
}