import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ALX Listing App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the booking platform
        </p>
        <Link 
          href="/booking" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
        >
          Go to Booking Page
        </Link>
      </div>
    </div>
  );
}
