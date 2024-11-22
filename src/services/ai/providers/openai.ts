import OpenAI from 'openai';
import { AIClientConfig, AIResponse } from '../types';

export class OpenAIClient {
  private client: OpenAI;

  constructor(config: AIClientConfig) {
    this.client = new OpenAI({
      apiKey: config.apiKey,
      dangerouslyAllowBrowser: true
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

    const completion = await this.client.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4-turbo-preview",
    });

    return JSON.parse(completion.choices[0].message.content || '{}');
  }
}