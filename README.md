# ALX Listing App 04 - API Integration

This project is an enhanced Airbnb clone that integrates with REST APIs to provide dynamic data fetching for property listings, property details, bookings, and reviews. This milestone transforms the project from a static prototype into a fully interactive application.

## 🚀 Features

### 🏠 Property Listings
- Dynamic property listing fetched from `/api/properties`
- Loading states and error handling
- Responsive grid layout with property cards
- Search and filter capabilities (ready for implementation)

### 🏘️ Property Details
- Dynamic property details fetched from `/api/properties/:id`
- Property information, host details, and amenities
- Dynamic routing based on property ID
- Integrated review system

### 📝 Booking System
- Interactive booking form with comprehensive validation
- API integration for booking submission to `/api/bookings`
- Real-time form state management
- Success and error feedback with confirmation numbers

### ⭐ Reviews
- Dynamic reviews fetched from `/api/properties/:id/reviews`
- Star rating display system
- User avatars and review dates
- Loading and error states

## 🔗 API Endpoints

### Properties
- `GET /api/properties` - Fetch all available properties
- `GET /api/properties/:id` - Fetch specific property details by ID

### Reviews  
- `GET /api/properties/:id/reviews` - Fetch reviews for a specific property

### Bookings
- `POST /api/bookings` - Submit a new booking with validation

## 🛠 Tech Stack

- **Next.js 15.4.6** - React framework with SSR and dynamic routing
- **TypeScript** - Type safety and enhanced development experience
- **Axios** - Promise-based HTTP client for API requests
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **React Hooks** - useState, useEffect for state management

## 🚦 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Start production server:**
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
alx-listing-app-04/
├── components/
│   ├── booking/
│   │   ├── BookingForm.tsx      # Enhanced form with API integration
│   │   ├── CancellationPolicy.tsx
│   │   └── OrderSummary.tsx
│   └── property/
│       ├── PropertyCard.tsx     # Reusable property display component
│       ├── PropertyDetail.tsx   # Detailed property view
│       └── ReviewSection.tsx    # Dynamic reviews with API integration
├── pages/
│   ├── api/                     # Mock API routes for development
│   │   ├── bookings.ts         # Booking submission endpoint
│   │   └── properties/
│   │       ├── index.ts        # Properties listing endpoint
│   │       ├── [id].ts         # Individual property endpoint
│   │       └── [id]/
│   │           └── reviews.ts  # Property reviews endpoint
│   ├── booking/
│   │   └── index.tsx           # Booking page with form integration
│   ├── property/
│   │   └── [id].tsx           # Dynamic property detail page
│   ├── _app.tsx               # Application wrapper
│   └── index.tsx              # Main property listings page
├── types/
│   └── index.ts               # TypeScript interface definitions
└── styles/
    └── globals.css            # Global styles and Tailwind imports
```

## 🎯 Key Implementation Details

### Dynamic Data Fetching
- **Property Listings**: `pages/index.tsx` fetches and displays properties dynamically
- **Property Details**: `pages/property/[id].tsx` uses Next.js dynamic routing
- **Reviews**: `components/property/ReviewSection.tsx` loads reviews per property
- **Booking**: `components/booking/BookingForm.tsx` submits to API with validation

### State Management
- Loading states for all API calls
- Error handling with user-friendly messages
- Form state management with controlled inputs
- Success confirmations for completed actions

### Type Safety
- Comprehensive TypeScript interfaces in `types/index.ts`
- Type-safe API responses and component props
- Proper error type handling

## 🔧 Component Details

### PropertyCard
- Displays property thumbnail, title, location, price, and rating
- Clickable navigation to property detail page
- Responsive design with hover effects

### PropertyDetail
- Comprehensive property information display
- Host details and amenities section
- Integrated review system
- Call-to-action buttons

### BookingForm
- Multi-section form (Contact, Payment, Billing Address)
- Real-time form validation
- API submission with proper error handling
- Success state with confirmation message

### ReviewSection
- Fetches reviews based on property ID
- Star rating visualization
- User information with avatars
- Responsive review layout

## 🎨 UI/UX Features

- **Dark Mode**: Full dark mode support with toggle
- **Loading States**: Smooth loading animations
- **Error Handling**: Clear error messages with retry options
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Form Validation**: Real-time input validation
- **Visual Feedback**: Success and error state indicators

## 📊 Mock API Data

The project includes realistic mock data:
- **6 Properties** with complete details (images, amenities, host info)
- **Multiple Reviews** per property with ratings and comments
- **Booking Validation** with confirmation number generation
- **Simulated API Delays** for realistic user experience

## 🔒 Error Handling

Comprehensive error handling includes:
- Network connectivity issues
- API endpoint failures
- Form validation errors
- Missing or invalid data
- User-friendly error messages
- Retry mechanisms

## 🧪 Testing the Application

### Property Listings
1. Visit the home page to see dynamic property loading
2. Wait for the loading state to complete
3. Click on any property card to view details

### Property Details
1. Navigate to `/property/1` (or any property ID 1-6)
2. View dynamic property information
3. Scroll down to see reviews loading dynamically

### Booking System
1. Go to `/booking` or click "Book Now" from property details
2. Fill out the booking form
3. Submit to see API integration in action
4. Observe loading states and success confirmation

## 🚀 Production Deployment

The application is ready for deployment to platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Docker containers

## 📝 Learning Outcomes

This milestone demonstrates:
- REST API integration patterns
- React state management with hooks
- TypeScript for type safety
- Form handling and validation
- Error boundary implementation
- Responsive design principles
- Modern React/Next.js development practices

---

**Project**: ALX Software Engineering Program - Milestone 4  
**Focus**: API Integration and Dynamic Data Handling  
**Status**: ✅ Complete

