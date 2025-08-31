// Property-related interfaces
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    joinedDate: string;
  };
}

// Review-related interfaces
export interface Review {
  id: string;
  comment: string;
  rating: number;
  user: {
    name: string;
    avatar: string;
  };
  date: string;
}

// Booking-related interfaces
export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface BookingConfirmation {
  id: string;
  confirmationNumber: string;
  status: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  bookingDate: string;
  message: string;
}

// API Response interfaces
export interface ApiError {
  error: string;
  details?: string;
}
