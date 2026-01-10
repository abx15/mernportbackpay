import { Router } from 'express';
import { login, registerAdmin } from '../controllers/authController.js';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/projectController.js';
import { sendMessage, getMessages } from '../controllers/messageController.js';
import { createOrder, verifyPayment } from '../controllers/orderController.js';
import { processAIRequest } from '../controllers/aiController.js';

const router = Router();

// Auth
router.post('/auth/login', login);
router.post('/auth/register-admin', registerAdmin); // Should be protected or disabled in production

// Projects
router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

// Contact
router.post('/contact', sendMessage);
router.get('/messages', getMessages);

// Orders
router.post('/orders', createOrder);
router.post('/orders/verify', verifyPayment);

// AI
router.post('/ai/generate', processAIRequest);

export default router;
