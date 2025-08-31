import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber,
      expirationDate,
      cvv,
      billingAddress,
      city,
      state,
      zipCode,
      country
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !phoneNumber || !cardNumber) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'Please fill in all required booking information.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        details: 'Please enter a valid email address.'
      });
    }

    // Simulate API delay and processing
    setTimeout(() => {
      // Generate a mock booking confirmation
      const bookingConfirmation = {
        id: `booking_${Date.now()}`,
        confirmationNumber: `ALX${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        status: 'confirmed',
        customerInfo: {
          firstName,
          lastName,
          email,
          phoneNumber
        },
        bookingDate: new Date().toISOString(),
        message: 'Your booking has been confirmed successfully!'
      };

      res.status(201).json(bookingConfirmation);
    }, 1500); // Simulate processing time
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
