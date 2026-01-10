import mongoose from 'mongoose';

const AIRequestSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: String },
    generatedProposal: { type: String },
    techStack: [{ type: String }],
    estimatedTimeline: { type: String },
    userEmail: { type: String, required: true },
}, { timestamps: true });

export const AIRequest = mongoose.model('AIRequest', AIRequestSchema);
