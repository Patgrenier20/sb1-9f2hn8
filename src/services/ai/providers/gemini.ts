import { GoogleGenerativeAI } from '@google/generative-ai';
import { AIClientConfig, AIResponse } from '../types';

export class GeminiClient {
  private client: GoogleGenerativeAI;

  constructor(config: AIClientConfig) {
    this.client = new GoogleGenerativeAI(config.apiKey);
  }

  async generateSchedule(tasks: any[], milestones: any[]): Promise<AIResponse> {
    const model = this.client.getGenerativeModel({ model: 'gemini-pro' });

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text());
  }
}