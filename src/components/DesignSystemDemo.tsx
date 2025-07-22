import React from 'react';

export default function DesignSystemDemo() {
  return (
    <div className="min-h-screen bg-light-gray p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Typography Showcase */}
        <section className="space-y-6">
          <h2 className="text-h2 font-primary font-medium text-text-dark">
            Design System Typography
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* New Fonts */}
            <div className="space-y-4">
              <h3 className="text-h3 font-primary font-medium text-text-dark">
                Source Sans Pro (Primary)
              </h3>
              <div className="space-y-2">
                <h1 className="text-h1 font-primary font-medium text-text-dark">
                  Large Headline (48px)
                </h1>
                <h2 className="text-h2 font-primary font-regular text-text-dark">
                  Section Header (32px)
                </h2>
                <p className="text-body font-primary font-regular text-text-dark">
                  Body text using Source Sans Pro. This is the primary font for headings and important content.
                </p>
                <p className="text-nav font-primary font-light text-text-light">
                  Navigation text (14px) with light weight
                </p>
              </div>
            </div>

            {/* Secondary Font */}
            <div className="space-y-4">
              <h3 className="text-h3 font-secondary font-medium text-text-dark">
                Open Sans (Secondary)
              </h3>
              <div className="space-y-2">
                <h1 className="text-h1 font-secondary font-medium text-text-dark">
                  Large Headline (48px)
                </h1>
                <h2 className="text-h2 font-secondary font-regular text-text-dark">
                  Section Header (32px)
                </h2>
                <p className="text-body font-secondary font-regular text-text-dark">
                  Body text using Open Sans. This is the secondary font for body content and general text.
                </p>
                <p className="text-nav font-secondary font-regular text-text-light">
                  Navigation text (14px) with regular weight
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-h2 font-primary font-medium text-text-dark">
            Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary-navy text-white p-4 rounded-default">
              <h4 className="font-medium mb-2">Primary Navy</h4>
              <p className="text-sm">#2C3E50</p>
            </div>
            <div className="bg-link-blue text-white p-4 rounded-default">
              <h4 className="font-medium mb-2">Link Blue</h4>
              <p className="text-sm">#007BFF</p>
            </div>
            <div className="bg-success-green text-white p-4 rounded-default">
              <h4 className="font-medium mb-2">Success Green</h4>
              <p className="text-sm">#28A745</p>
            </div>
            <div className="bg-light-gray text-text-dark p-4 rounded-default">
              <h4 className="font-medium mb-2">Light Gray</h4>
              <p className="text-sm">#F8F9FA</p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="space-y-6">
          <h2 className="text-h2 font-primary font-medium text-text-dark">
            Interactive Elements
          </h2>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-link-blue hover:text-primary-navy transition-colors duration-300">
                Link with hover effect
              </a>
              <button className="bg-link-blue text-white px-6 py-3 rounded-default hover:bg-primary-navy transition-colors duration-300">
                Primary Button
              </button>
              <button className="bg-light-gray text-text-dark px-6 py-3 rounded-default hover:bg-text-light transition-colors duration-300">
                Secondary Button
              </button>
            </div>
          </div>
        </section>

        {/* Card Example */}
        <section className="space-y-6">
          <h2 className="text-h2 font-primary font-medium text-text-dark">
            Card Component
          </h2>
          
          <div className="bg-white p-6 rounded-default shadow-card">
            <h3 className="text-h3 font-primary font-medium text-text-dark mb-4">
              Card Title
            </h3>
            <p className="text-body font-secondary text-text-dark mb-4">
              This is a card component using the new design system. It features the card shadow, 
              rounded corners, and proper typography hierarchy.
            </p>
            <div className="flex gap-4">
              <button className="bg-success-green text-white px-4 py-2 rounded-default text-sm">
                Success Action
              </button>
              <button className="bg-light-gray text-text-dark px-4 py-2 rounded-default text-sm">
                Cancel
              </button>
            </div>
          </div>
        </section>

        {/* Existing Fonts Comparison */}
        <section className="space-y-6">
          <h2 className="text-h2 font-primary font-medium text-text-dark">
            Font Comparison
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-heading text-lg font-medium">Playfair Display</h4>
              <p className="font-heading text-sm">Luxury serif font for headings</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-primary text-lg font-medium">Source Sans Pro</h4>
              <p className="font-primary text-sm">Clean sans-serif for primary content</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-secondary text-lg font-medium">Open Sans</h4>
              <p className="font-secondary text-sm">Readable sans-serif for body text</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
} 