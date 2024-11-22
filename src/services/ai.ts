import OpenAI from 'openai';
import { Task, Milestone } from '../types/project';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateSchedule(tasks: Task[], milestones: Milestone[]) {
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

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4-turbo-preview",
  });

  return JSON.parse(completion.choices[0].message.content || '{}');
}