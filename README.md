# ALX Listing App 03 - Booking Detail Page

A fully functional booking detail page built with Next.js, React, TypeScript, and Tailwind CSS. This application simulates the booking flow of platforms like Airbnb and Booking.com.

## Features

- **Responsive Booking Form**: Collects user contact information, payment details, and billing address
- **Order Summary Component**: Displays property details, pricing breakdown, and total cost
- **Cancellation Policy**: Shows refund policies and ground rules
- **Mobile-First Design**: Fully responsive layout using Tailwind CSS
- **TypeScript Support**: Type-safe components and props
- **Modern UI/UX**: Clean design with focus states and hover effects

## Project Structure

```
├── components/
│   └── booking/
│       ├── BookingForm.tsx          # Contact and payment form
│       ├── OrderSummary.tsx         # Booking details and pricing
│       └── CancellationPolicy.tsx   # Policy and ground rules
├── pages/
│   ├── booking/
│   │   └── index.tsx               # Main booking page
│   ├── _app.tsx                    # App wrapper with global styles
│   └── index.tsx                   # Home page
├── styles/
│   └── globals.css                 # Global Tailwind CSS imports
└── configuration files...
```

## Components

### BookingForm
- Contact information (First Name, Last Name, Email, Phone)
- Payment details (Card Number, Expiration Date, CVV)
- Billing address (Street, City, State, ZIP, Country)
- Responsive grid layout with form validation styling

### OrderSummary
- Property image and details
- Review scores and booking dates
- Price breakdown (booking fee, subtotal, total)
- Sticky positioning on larger screens

### CancellationPolicy
- Cancellation terms and refund policies
- Ground rules for guests
- Clean typography and bullet points

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

4. **View the booking page:**
   Go to `http://localhost:3000/booking`

## Technologies Used

- **Next.js 15.4.6** - React framework for production
- **React 19.1.1** - UI library
- **TypeScript 5.9.2** - Type safety
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## Key Features Implemented

1. **Component-Based Architecture**: Modular, reusable React components
2. **Responsive Design**: Mobile-first approach with Tailwind's grid system
3. **Form Layout & Input Grouping**: Organized form sections with proper labeling
4. **Dynamic Data Rendering**: Props-based component communication
5. **Pricing Calculations**: Real-time total calculation display
6. **Accessibility**: Proper form labels, focus states, and semantic HTML

## Responsive Breakpoints

- **Mobile**: Single column layout, stacked components
- **Tablet**: Responsive grid transitions
- **Desktop**: Two-column layout with sticky order summary

## Future Enhancements

- Form validation and error handling
- Payment processing integration
- Backend API integration
- User authentication
- Booking confirmation flow
- Email notifications

## License

This project is part of the ALX Software Engineering program.

