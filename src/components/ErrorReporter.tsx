"use client";

import { useEffect } from 'react';

function ErrorReporter() {
  useEffect(() => {
    // Global error handler
    const handleError = (error: ErrorEvent) => {
      console.error('Application Error:', error);
      // Here you could send errors to your error tracking service
      // Example: Sentry, LogRocket, etc.
    };

    // Global unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      // Here you could send errors to your error tracking service
    };

    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}

export default ErrorReporter; 