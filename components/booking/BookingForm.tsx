import React from 'react';

const BookingForm = () => (
  <div className="bg-white dark:bg-gray-900 p-8 shadow-lg rounded-xl border border-gray-100 dark:border-gray-800">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Contact Details</h2>
    <form className="space-y-6">
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">First Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Last Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Phone Number</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Payment Information */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          Payment Details
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Card Number</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Expiration Date</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">CVV</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Billing Address
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Street Address</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
              placeholder="123 Main Street"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">City</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
                placeholder="New York"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">State</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
                placeholder="NY"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Zip Code</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
                placeholder="10001"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Country</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600" 
                placeholder="United States"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Confirm & Pay</span>
        </button>
      </div>
    </form>
  </div>
);

export default BookingForm;
