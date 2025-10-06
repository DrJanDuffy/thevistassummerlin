'use client';

import { useState } from 'react';
import { Star, MessageCircle, Send, CheckCircle, Sparkles, Heart, Award, Users } from 'lucide-react';

export default function ReviewCollectionWidget() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    // For now, we'll just show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setShowForm(false);
      setRating(0);
      setReview('');
      setName('');
      setEmail('');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 border border-green-200">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You for Your Review!
          </h3>
          <p className="text-gray-600 mb-6">
            Your feedback helps other families find the perfect real estate expert.
          </p>
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Review submitted successfully!</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* V0 Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-200/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-200/10 rounded-full blur-lg animate-pulse delay-300"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168, 85, 247, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-3 text-purple-700 font-medium mb-6 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Heart className="w-5 h-5" />
            <span>Share Your Experience</span>
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Help Others Find Their
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your review helps families discover the exceptional service Dr. Jan Duffy provides in The Vistas Summerlin
          </p>
        </div>

        {!showForm ? (
          /* Review Request Card */
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50 hover:shadow-3xl transition-all duration-300">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Loved Working with Dr. Jan Duffy?
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Share your experience and help other families discover the exceptional service 
                that makes The Vistas Summerlin real estate journey unforgettable.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    <span className="text-2xl font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-gray-600 font-medium">Average Rating</p>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Users className="w-6 h-6 text-blue-500" />
                    <span className="text-2xl font-bold text-gray-900">150+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Happy Families</p>
                </div>
                
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Award className="w-6 h-6 text-green-500" />
                    <span className="text-2xl font-bold text-gray-900">15+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        ) : (
          /* Review Form */
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Share Your Experience
              </h3>
              <p className="text-gray-600">
                Your feedback helps other families make informed decisions
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div className="text-center">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  How would you rate your experience?
                </label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none transition-transform duration-200 hover:scale-110"
                    >
                      <Star
                        className={`w-12 h-12 ${
                          star <= (hoverRating || rating)
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-3">
                  Tell us about your experience
                </label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Share details about your experience working with Dr. Jan Duffy..."
                  className="w-full h-32 px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First Last"
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-gray-900 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Review</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
