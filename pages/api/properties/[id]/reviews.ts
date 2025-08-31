import type { NextApiRequest, NextApiResponse } from 'next';

// Mock reviews data
const reviewsData: { [key: string]: any[] } = {
  '1': [
    {
      id: 'r1',
      comment: 'Absolutely amazing place! The beach access was incredible and Sarah was a wonderful host. The villa exceeded all our expectations.',
      rating: 5,
      user: {
        name: 'John Smith',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'August 2024'
    },
    {
      id: 'r2',
      comment: 'Great location and beautiful views. The pool area was perfect for relaxing. Minor issue with WiFi but overall fantastic stay.',
      rating: 4,
      user: {
        name: 'Lisa Wang',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'July 2024'
    },
    {
      id: 'r3',
      comment: 'Perfect for our family vacation. Kids loved the beach access and adults enjoyed the peaceful atmosphere.',
      rating: 5,
      user: {
        name: 'Mark Johnson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'June 2024'
    }
  ],
  '2': [
    {
      id: 'r4',
      comment: 'Amazing location in downtown! Walking distance to everything. The loft is modern and well-equipped.',
      rating: 5,
      user: {
        name: 'Anna Davis',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'August 2024'
    },
    {
      id: 'r5',
      comment: 'Great city views and very clean. The rooftop terrace was a nice bonus. Would definitely stay again.',
      rating: 4,
      user: {
        name: 'Tom Wilson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'July 2024'
    }
  ],
  '3': [
    {
      id: 'r6',
      comment: 'Perfect mountain getaway! The cabin has everything you need and the hiking trails are incredible. Emma was very responsive.',
      rating: 5,
      user: {
        name: 'Sarah Miller',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'August 2024'
    }
  ],
  '4': [
    {
      id: 'r7',
      comment: 'Luxury at its finest! The penthouse is stunning with amazing ocean views. Worth every penny.',
      rating: 5,
      user: {
        name: 'James Brown',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'July 2024'
    }
  ],
  '5': [
    {
      id: 'r8',
      comment: 'Loved the historic charm combined with modern amenities. Great location for exploring Boston.',
      rating: 4,
      user: {
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'June 2024'
    }
  ],
  '6': [
    {
      id: 'r9',
      comment: 'Incredible desert views and very peaceful. The hot tub under the stars was magical!',
      rating: 5,
      user: {
        name: 'Chris Lee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      },
      date: 'August 2024'
    }
  ]
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    
    // Simulate API delay
    setTimeout(() => {
      const reviews = reviewsData[id as string] || [];
      res.status(200).json(reviews);
    }, 600);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
