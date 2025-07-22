'use client';

export default function HomeEvaluationSection() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-primary font-medium text-text-dark mb-4">
            Get Your Home&apos;s Current Market Value
          </h2>
          <p className="text-body font-secondary text-text-light max-w-2xl mx-auto">
            Our advanced valuation tool provides instant, accurate home values using real-time market data 
            and comparable sales in The Vistas Summerlin area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Valuation Widget */}
          <div className="bg-white p-6 rounded-default shadow-card">
            <h3 className="text-h3 font-primary font-medium text-text-dark mb-4">
              Instant Home Valuation
            </h3>
            <div className="min-h-[480px] flex items-center justify-center">
              {/* RealScout Home Value Widget */}
              <realscout-home-value 
                agent-encoded-id="QWdlbnQtMjI1MDUw"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-default shadow-card">
              <h3 className="text-h3 font-primary font-medium text-text-dark mb-4">
                Why Get a Home Valuation?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-body font-primary font-medium text-text-dark">Accurate Market Data</h4>
                    <p className="text-sm font-secondary text-text-light">Uses real-time MLS data and recent comparable sales</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-body font-primary font-medium text-text-dark">Instant Results</h4>
                    <p className="text-sm font-secondary text-text-light">Get your home value in seconds, no waiting required</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-body font-primary font-medium text-text-dark">Local Expertise</h4>
                    <p className="text-sm font-secondary text-text-light">Specialized knowledge of The Vistas Summerlin market</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-white p-6 rounded-default shadow-card">
              <h3 className="text-h3 font-primary font-medium text-text-dark mb-4">
                Current Market Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-primary font-medium text-link-blue">$875K</div>
                  <div className="text-sm font-secondary text-text-light">Median Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-primary font-medium text-success-green">+5.2%</div>
                  <div className="text-sm font-secondary text-text-light">Price Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-primary font-medium text-primary-navy">45</div>
                  <div className="text-sm font-secondary text-text-light">Days on Market</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-primary font-medium text-link-blue">98%</div>
                  <div className="text-sm font-secondary text-text-light">List to Sale Ratio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 