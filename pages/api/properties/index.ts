import type { NextApiRequest, NextApiResponse } from 'next';

// Mock data for properties
const properties = [
  {
    id: '1',
    title: 'Villa Arrecife Beach House',
    description: 'A stunning beachfront villa with panoramic ocean views, perfect for a relaxing getaway. Features modern amenities and direct beach access.',
    price: 250,
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviews: 127,
    amenities: ['WiFi', 'Swimming Pool', 'Beach Access', 'Kitchen', 'Parking', 'Air Conditioning'],
    host: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joinedDate: 'March 2020'
    }
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    description: 'Stylish loft in the heart of downtown with city views and walking distance to restaurants, shops, and entertainment.',
    price: 180,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.6,
    reviews: 89,
    amenities: ['WiFi', 'Kitchen', 'Gym Access', 'Rooftop Terrace', 'Washer/Dryer', 'City View'],
    host: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joinedDate: 'January 2019'
    }
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    description: 'Escape to this charming mountain cabin surrounded by nature. Perfect for hiking enthusiasts and those seeking tranquility.',
    price: 120,
    location: 'Aspen, Colorado',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviews: 156,
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Hiking Trails', 'Mountain View', 'Pet Friendly'],
    host: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joinedDate: 'June 2021'
    }
  },
  {
    id: '4',
    title: 'Luxury Penthouse Suite',
    description: 'Indulge in luxury with this stunning penthouse featuring floor-to-ceiling windows and premium amenities.',
    price: 450,
    location: 'Miami Beach, FL',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    reviews: 78,
    amenities: ['WiFi', 'Ocean View', 'Balcony', 'Concierge', 'Spa Access', 'Premium Kitchen'],
    host: {
      name: 'David Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joinedDate: 'September 2018'
    }
  },
  {
    id: '5',
    title: 'Historic Brownstone',
    description: 'Experience the charm of this beautifully restored historic brownstone with original details and modern comfort.',
    price: 200,
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.5,
    reviews: 92,
    amenities: ['WiFi', 'Historic Character', 'Kitchen', 'Garden', 'Parking', 'Near Transit'],
    host: {
      name: 'Jennifer Walsh',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joinedDate: 'February 2020'
    }
  },
  {
    id: '6',
    title: 'Desert Oasis Villa',
    description: 'A serene desert retreat with stunning architecture and breathtaking sunset views over the Sonoran Desert.',
    price: 320,
    location: 'Scottsdale, AZ',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviews: 134,
    amenities: ['WiFi', 'Pool', 'Desert View', 'Hot Tub', 'Outdoor Kitchen', 'Meditation Space'],
    host: {
      name: 'Robert Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      joinedDate: 'May 2019'
    }
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Simulate API delay
    setTimeout(() => {
      res.status(200).json(properties);
    }, 1000);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
