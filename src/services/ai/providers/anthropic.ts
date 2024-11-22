import Anthropic from '@anthropic-ai/sdk';
import { AIClientConfig, AIResponse } from '../types';

export class AnthropicClient {
  private client: Anthropic;

  constructor(config: AIClientConfig) {
    this.client = new Anthropic({
      apiKey: config.apiKey
    });
  }

  async generateSchedule(tasks: any[], milestones: any[]): Promise<AIResponse> {
    const prompt = `Given these construction project tasks and milestones, generate an optimized schedule:
      Tasks: ${JSON.stringify(tasks, null, 2)}
      Milestones: ${JSON.stringify(milestones, null, 2)}
      
      Consider:
      1. Task dependencies
      2. Resource allocation
      3. Industry best practices
      4. Weather conditions
      5. Regulatory requirements
      
      Provide a schedule with:
      1. Optimized task sequence
      2. Realistic duration estimates
      3. Critical path identification
      4. Risk mitigation suggestions`;

    const message = await this.client.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });

    return JSON.parse(message.content[0].text);
  }
}