import React from 'react';

interface RealScoutFrameProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function RealScoutFrame({
  url = "https://drjanduffy.realscout.com/agent/listing-tools/my-listings",
  title = "Dr. Jan Duffy's Complete Property Portfolio",
  description = "Explore all of Dr. Jan Duffy's current listings and property management tools",
  className = ""
}: RealScoutFrameProps) {
  return (
    <div className={`bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden ${className}`}>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">🏠 {title}</h3>
            <p className="text-blue-100 text-sm">{description}</p>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Data</span>
          </div>
        </div>
      </div>

      {/* Frame Container */}
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 z-10 flex space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        
        {/* Frame Border */}
        <div className="absolute inset-0 border-4 border-gray-300 rounded-2xl pointer-events-none"></div>
        
        {/* Inner Shadow */}
        <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none"></div>
        
        {/* Iframe Container */}
        <div className="relative bg-white rounded-2xl m-2 overflow-hidden">
          <iframe
            src={url}
            className="w-full h-[600px] border-0 rounded-xl"
            title={title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          
          {/* Loading Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Interactive Property Portal</h4>
                <p className="text-gray-600 text-sm mb-4">Click to explore Dr. Jan Duffy's complete listing management system</p>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Secure Connection</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">RealScout Platform</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Open Full View</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
