import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    github: { type: String },
    demo: { type: String },
    tags: [{ type: String }],
    features: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

export const Project = mongoose.model('Project', ProjectSchema);
