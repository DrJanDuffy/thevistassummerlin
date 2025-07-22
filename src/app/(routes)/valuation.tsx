"use client";
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { DollarSign, HelpCircle, BarChart2 } from "lucide-react";
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';

const AGENT_ID = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID;

const faqData = [
  {
    question: "How accurate is this online valuation?",
    answer: "Our tool provides an estimated market value based on recent sales of similar homes in your area, public records, and current market trends. It's a great starting point, but for a definitive valuation, we recommend a detailed analysis by one of our expert agents."
  },
  {
    question: "Is this home valuation free?",
    answer: "Yes, this online home value estimate is completely free and comes with no obligation. We offer this as a complimentary service to help you understand your home's potential worth in today's market."
  },
  {
    question: "What factors influence my home's value?",
    answer: "Many factors influence a home's value, including location, size, age, condition, upgrades, comparable sales in the neighborhood, and overall market conditions. Our tool considers many of these, but unique features of your home are best assessed by a professional."
  },
  {
    question: "How can I get a more precise valuation?",
    answer: "The next step is a Comparative Market Analysis (CMA) prepared by a local real estate expert. This in-depth report considers your home's unique features and provides a more accurate and reliable valuation. Contact us to schedule a free, no-obligation CMA."
  }
];

export default function Valuation() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
      <main className="container mx-auto px-4">
        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              What&apos;s Your Home Worth?
            </h1>
            <p className="text-lg text-gray-700">
              Get an instant, data-driven estimate of your home&apos;s value in The Vistas Summerlin. Our tool analyzes millions of data points to provide you with a real-time valuation.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center"><DollarSign className="w-5 h-5 mr-3 text-green-600" /> Based on real-time market data.</li>
              <li className="flex items-center"><BarChart2 className="w-5 h-5 mr-3 text-blue-600" /> Compares your home to similar properties.</li>
              <li className="flex items-center"><HelpCircle className="w-5 h-5 mr-3 text-purple-600" /> Completely free and no obligation.</li>
            </ul>
          </div>
          
          {/* Right Column: Valuation Widget */}
          <div>
            {AGENT_ID ? (
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-2xl font-bold text-center mb-1">Enter Your Address</h2>
                <p className="text-center text-gray-600 mb-6">Receive your home value estimate instantly.</p>
                {React.createElement('realscout-home-value', {
                  'agent-encoded-id': AGENT_ID,
                  suppressHydrationWarning: true,
                })}
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-700 font-semibold">The valuation tool is temporarily unavailable. Please contact support.</p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* RealScout Advanced Search Section */}
        <section className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Home?</h2>
            <p className="text-lg text-gray-600">Search available properties in The Vistas Summerlin</p>
          </div>
          <RealScoutAdvancedSearch />
        </section>
      </main>
      
      <noscript>
        <div className="container mx-auto mt-4">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
            <p className="font-bold">JavaScript Required</p>
            <p>This interactive tool requires JavaScript to be enabled in your browser.</p>
          </div>
        </div>
      </noscript>
    </div>
  );
} 