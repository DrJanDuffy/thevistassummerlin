import React from 'react';

// Voice Search Optimized FAQ Component
export function VoiceSearchFAQ() {
  const faqs = [
    {
      question: "What is the average home price in The Vistas Summerlin?",
      answer: "The average home price in The Vistas Summerlin ranges from $800,000 to $2.5 million, with luxury estates reaching $5+ million. Prices vary by home size, location within The Vistas, and amenities.",
      voiceQuery: "How much do homes cost in The Vistas Summerlin?"
    },
    {
      question: "What are the HOA fees in The Vistas Summerlin?", 
      answer: "HOA fees in The Vistas Summerlin typically range from $200 to $400 per month, depending on the specific subcommunity and amenities included.",
      voiceQuery: "What are the HOA fees in The Vistas?"
    },
    {
      question: "What schools serve The Vistas Summerlin?",
      answer: "The Vistas Summerlin is served by Palo Verde High School, Sig Rogich Middle School, and several top-rated elementary schools including Ernest May Elementary.",
      voiceQuery: "What schools are near The Vistas Summerlin?"
    },
    {
      question: "What amenities are available in The Vistas Summerlin?",
      answer: "The Vistas Summerlin offers golf course access, community pools, tennis courts, walking trails, parks, and proximity to TPC Summerlin golf course.",
      voiceQuery: "What amenities does The Vistas Summerlin have?"
    },
    {
      question: "Is The Vistas Summerlin a good place to live?",
      answer: "Yes, The Vistas Summerlin is considered one of Las Vegas' premier communities, offering luxury homes, excellent schools, golf course access, and a family-friendly environment.",
      voiceQuery: "Is The Vistas Summerlin a good neighborhood?"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions About The Vistas Summerlin
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
              <div className="mt-3 text-sm text-gray-500 italic">
                Voice search: "{faq.voiceQuery}"
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have more questions about The Vistas Summerlin?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Jan Duffy
          </a>
        </div>
      </div>
    </section>
  );
}

// Answer Engine Optimization Component
export function AnswerEngineOptimization() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          The Vistas Summerlin - Quick Facts
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">$800K+</div>
            <div className="text-gray-700">Starting Home Prices</div>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">28</div>
            <div className="text-gray-700">Subcommunities</div>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-700">Years Experience</div>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">A+</div>
            <div className="text-gray-700">Rated Schools</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> The Vistas, Summerlin, Las Vegas, NV 89134
          </p>
          <p className="text-gray-600">
            <strong>Nearby:</strong> TPC Summerlin Golf Course, Palo Verde High School, Red Rock Canyon
          </p>
        </div>
      </div>
    </section>
  );
}
