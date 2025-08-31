import React from "react";

const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
  <div className="bg-white dark:bg-gray-900 p-8 shadow-lg rounded-xl border border-gray-100 dark:border-gray-800 sticky top-6">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Review Order Details</h2>
    
    {/* Property Details */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-850 p-6 rounded-xl mb-6 border border-blue-100 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
          alt="Property" 
          className="w-20 h-20 object-cover rounded-xl shadow-md" 
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{bookingDetails.propertyName}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">4.76 (345 reviews)</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</span>
          </div>
        </div>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-800 pb-2">Price Breakdown</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 dark:text-gray-300 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Booking Fee
          </span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">${"" + bookingDetails.bookingFee}</span>
        </div>
        
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 dark:text-gray-300 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Subtotal
          </span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">${"" + bookingDetails.price}</span>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-3 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Grand Total
            </span>
            <span className="text-2xl font-bold text-green-600">${"" + (bookingDetails.bookingFee + bookingDetails.price)}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Security Notice */}
    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <div className="flex items-start space-x-3">
        <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <div>
          <p className="text-sm font-semibold text-green-800 dark:text-green-300">Secure Payment</p>
          <p className="text-xs text-green-700 dark:text-green-400 mt-1">Your payment information is protected with bank-level security.</p>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSummary;
