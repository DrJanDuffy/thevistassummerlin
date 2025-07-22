'use client';

export default function HomeEvaluationSection() {
  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
            Get Your Home&apos;s Current Market Value
          </h2>
          <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
            Our advanced valuation tool provides instant, accurate home values using real-time market data 
            and comparable sales in The Vistas Summerlin area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Valuation Widget */}
          <div className="bg-white p-8 rounded-default shadow-lg">
            <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
              What&apos;s my home worth?
            </h3>
            <div className="min-h-[480px] flex items-center justify-center">
              {/* RealScout Home Value Widget */}
              <realscout-home-value 
                agent-encoded-id="QWdlbnQtMjI1MDUw"
              />
            </div>
          </div>

          {/* Benefits and Market Overview */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-default shadow-lg">
              <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
                Why Get a Home Valuation?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-primary font-medium text-text-dark mb-2">Accurate Market Data</h4>
                    <p className="text-body font-secondary text-text-light">Uses real-time MLS data and recent comparable sales</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-primary font-medium text-text-dark mb-2">Instant Results</h4>
                    <p className="text-body font-secondary text-text-light">Get your home value in seconds, no waiting required</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-primary font-medium text-text-dark mb-2">Local Expertise</h4>
                    <p className="text-body font-secondary text-text-light">Specialized knowledge of The Vistas Summerlin market</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-white p-8 rounded-default shadow-lg">
              <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
                Current Market Overview
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-light-gray rounded-default">
                  <div className="text-3xl font-primary font-medium text-link-blue mb-2">$875K</div>
                  <div className="text-sm font-secondary text-text-light">Median Price</div>
                  <div className="text-sm font-secondary text-success-green mt-1">+5.2% Price Growth</div>
                </div>
                <div className="text-center p-4 bg-light-gray rounded-default">
                  <div className="text-3xl font-primary font-medium text-primary-navy mb-2">45</div>
                  <div className="text-sm font-secondary text-text-light">Days on Market</div>
                  <div className="text-sm font-secondary text-link-blue mt-1">98% List to Sale Ratio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 