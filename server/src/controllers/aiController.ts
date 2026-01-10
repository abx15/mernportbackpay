import { Request, Response } from 'express';
import { AIRequest } from '../models/AIRequest.js';
import { generateAIContent } from '../utils/ai.js';

export const processAIRequest = async (req: Request, res: Response) => {
    const { projectName, description, budget, userEmail } = req.body;

    const prompt = `
    I am a developer. A client wants to work on a project:
    Project Name: ${projectName}
    Description: ${description}
    Budget: ${budget}
    
    Please generate:
    1. A professional proposal.
    2. A suggested modern tech stack.
    3. An estimated timeline.
    
    Provide the response in a structured text format.
  `;

    try {
        const result = await generateAIContent(prompt);

        const aiRequest = new AIRequest({
            projectName,
            description,
            budget,
            userEmail,
            generatedProposal: result,
            // parsing logic could be added here to separate techStack and timeline
        });

        await aiRequest.save();
        res.json({ proposal: result });
    } catch (error) {
        res.status(500).json({ message: 'Error processing AI request' });
    }
};
