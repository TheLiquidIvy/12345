
import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  // In a real application, you would:
  // 1. Sanitize the input
  // 2. Send an email notification (e.g., using Nodemailer)
  // 3. Save the submission to a database

  console.log('New contact form submission:', req.body);

  res.status(200).json({ message: 'Form submitted successfully' });
});

export default router;
