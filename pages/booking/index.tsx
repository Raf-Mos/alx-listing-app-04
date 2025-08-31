import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import React, { useEffect, useState } from "react";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  // Scroll progress and header elevation
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Dark mode
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize dark mode from localStorage or prefers-color-scheme
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      setProgress(pct);
      setScrolled(scrollTop > 2);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className={`sticky top-0 z-40 bg-white dark:bg-gray-900 border-b ${scrolled ? 'shadow-md border-gray-200 dark:border-gray-800' : 'shadow-sm border-gray-100 dark:border-gray-800'}`}>
        <div className="container mx-auto px-6 py-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 dark:text-gray-400 mb-2" aria-label="Breadcrumb">
            <ol className="list-reset flex items-center space-x-2">
              <li>
                <a href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</a>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">Listings</a>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-700 dark:text-gray-200 font-medium" aria-current="page">Booking</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Complete Your Booking</h1>

            {/* Right side: stepper + theme toggle */}
            <div className="flex items-center gap-4">
              {/* Simple stepper */}
              <div className="hidden sm:flex items-center text-sm">
                <div className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">1</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-200">Details</span>
                </div>
                <div className="w-10 h-0.5 bg-green-500 mx-3"></div>
                <div className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">2</span>
                  <span className="ml-2 text-gray-700 dark:text-gray-200">Review</span>
                </div>
                <div className="w-10 h-0.5 bg-gray-300 dark:bg-gray-700 mx-3"></div>
                <div className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 flex items-center justify-center text-xs font-bold">3</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">Confirm</span>
                </div>
              </div>

              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={isDark}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                title="Toggle dark mode"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isDark ? (
                    // Sun icon
                    <g>
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </g>
                  ) : (
                    // Moon icon
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  )}
                </svg>
                <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>

          {/* Security note */}
          <div className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 mt-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12l2 2 4-4" />
              <path d="M20.618 7.984A11.955 11.955 0 0012 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Form Section - Takes 2/3 of the space */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          
          {/* Order Summary - Takes 1/3 of the space */}
          <div className="lg:col-span-1">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </div>

        {/* Footer note */}
        <div className="max-w-7xl mx-auto mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          By confirming your booking you agree to our Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}