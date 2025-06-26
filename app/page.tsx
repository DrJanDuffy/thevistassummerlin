import React, { Suspense } from 'react';
import Link from "next/link";
import { Home as HomeIcon, School, Trees, UserCheck } from 'lucide-react';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import CommunitySpotlight from "@/components/CommunitySpotlight";
import Testimonials from "./testimonials";
import AnimatedSection from "@/components/AnimatedSection";

// Loading fallback components
const LoadingSection = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Two Side-by-Side Cards */}
      <section className="w-full max-w-7xl mx-auto pt-8 pb-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Hero Card */}
        <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl flex items-end">
          <img
            src="/subcommunities/IMG_0737.JPG"
            alt="Welcome to Summerlin"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 p-8 flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">Welcome to Summerlin<sup className='text-base align-super'>&reg;</sup></h1>
            <Link
              href="/search"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
            >
              Be Part Of Something Beautiful
            </Link>
          </div>
        </div>
        {/* Right Hero Card */}
        <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl flex items-end">
          <img
            src="/subcommunities/IMG_0738.JPG"
            alt="Experience Downtown Summerlin"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 p-8 flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">Experience Downtown Summerlin<sup className='text-base align-super'>&reg;</sup></h1>
            <Link
              href="/communities"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
            >
              Find Out More
            </Link>
          </div>
        </div>
      </section>

      {/* Growing Stronger Together Section */}
      <section className="w-full max-w-7xl mx-auto mb-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Left */}
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/subcommunities/IMG_0739.JPG"
            alt="Growing Stronger Together"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        {/* Text Right */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary font-heading">Growing Stronger Together</h2>
          <p className="text-lg text-foreground/90 max-w-xl font-body">
            Named one of Money Magazine&apos;s &quot;Best Places to Live&quot; in 2014, Summerlin is both a vision and a boom town. Community growth has paralleled the growth of Las Vegas, from national acclaim to reach as a global sports, entertainment, and business destination. With 28 unique neighborhoods and beautiful trails that wind from the Red Rock foothills to the heart of Downtown, it&apos;s a community for all ages and all walks of life. Abundant parks, top-rated schools, dining and entertainment at Downtown Summerlin, and the beauty of Red Rock Canyon make it truly one-of-a-kind. The 2023 Stanley Cup-winning Vegas Golden Knights hockey team, as well as the Las Vegas Aviators, are based in the heart of Summerlin.
          </p>
        </div>
      </section>

      {/* Cyclists Full-Width Image Section */}
      <section className="w-full mb-12">
        <div className="relative w-full h-64 md:h-96">
          <img
            src="/subcommunities/IMG_0737.JPG"
            alt="Cyclists in Summerlin"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Find Your New Home Section */}
      <section className="w-full max-w-7xl mx-auto mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 font-heading">FIND YOUR NEW HOME</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <img
                src="/subcommunities/IMG_0738.JPG"
                alt="Start A Home Search"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 font-heading">Start A Home Search</h3>
              <p className="text-foreground/80 mb-4 font-body">Summerlin is Las Vegas&apos; premier urban and residential community nestled against the breathtaking Red Rock National Conservation Area.</p>
              <Link href="/search" className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-base shadow transition-all duration-300">View</Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <img
                src="https://placehold.co/400x200/0A2540/FFF?text=Builders"
                alt="Meet The Builders"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 font-heading">Meet The Builders</h3>
              <p className="text-foreground/80 mb-4 font-body">Summerlin has the largest roster of national homebuilders, part of the community&apos;s commitment to quality and innovative home design—always a hallmark of this iconic area.</p>
              <Link href="/about" className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-base shadow transition-all duration-300">View</Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <img
                src="https://placehold.co/400x200/3A8DDE/FFF?text=Neighborhood"
                alt="Neighborhood Spotlight"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 font-heading">Neighborhood Spotlight</h3>
              <p className="text-foreground/80 mb-4 font-body">Caldwell Park by KB Home, located in Grand Park, offers townhomes and new two-story single-family homes from 1,480 – 2,466 sq. ft., starting from the $400s.</p>
              <Link href="/communities" className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-base shadow transition-all duration-300">View</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Downtown Summerlin Section */}
      <section className="w-full max-w-7xl mx-auto mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 font-heading">Experience Downtown Summerlin<sup className='text-base align-super'>&reg;</sup></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://placehold.co/400x220/0A2540/FFF?text=Happening" alt="It's All Happening Here" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <h3 className="text-lg font-bold text-white mb-2">It&apos;s All Happening Here</h3>
              <Link href="/events" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow transition-all duration-300">View</Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://placehold.co/400x220/3A8DDE/FFF?text=Restaurants" alt="Restaurants" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <h3 className="text-lg font-bold text-white mb-2">Restaurants</h3>
              <Link href="/dining" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow transition-all duration-300">View</Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://placehold.co/400x220/F7F9FC/0A2540?text=Events" alt="Upcoming Events" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <h3 className="text-lg font-bold text-white mb-2">Upcoming Events</h3>
              <Link href="/events" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow transition-all duration-300">View</Link>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://placehold.co/400x220/16B286/FFF?text=Retail" alt="Retail" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <h3 className="text-lg font-bold text-white mb-2">Retail</h3>
              <Link href="/shopping" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow transition-all duration-300">View</Link>
            </div>
          </div>
          {/* Card 5 */}
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://placehold.co/400x220/0A2540/FFF?text=Ballpark" alt="Las Vegas Ballpark" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <h3 className="text-lg font-bold text-white mb-2">Las Vegas Ballpark</h3>
              <Link href="/events" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow transition-all duration-300">View</Link>
            </div>
          </div>
          {/* Card 6 */}
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://placehold.co/400x220/3A8DDE/FFF?text=Blog" alt="Read Our Blog" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
              <h3 className="text-lg font-bold text-white mb-2">Read Our Blog</h3>
              <Link href="/blog" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-sm shadow transition-all duration-300">View</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="w-full mb-16">
        <div className="relative w-full h-80 md:h-[420px] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="https://placehold.co/1200x420/0A2540/FFF?text=Commercial"
            alt="Commercial"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-start justify-center h-full p-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">Commercial</h2>
            <p className="text-lg text-white mb-6 font-body">When others ask why? We ask how. Business. Class. This, coupled with unparalleled views with unlimited potential, against the perfect western backdrop—from Red Rock Canyon to the Strip.</p>
            <Link href="/commercial" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">Find Out More</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Bar */}
      <section className="w-full bg-red-600 py-8 flex justify-center items-center mb-0">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl px-4">
          <span className="text-white text-lg font-semibold flex-1 text-center md:text-left">Sign up for the latest happenings around Summerlin<sup className='text-base align-super'>&reg;</sup></span>
          <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300">Sign Up</button>
        </div>
      </section>

      {/* Why Choose Section */}
      <AnimatedSection className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 font-heading">
                Why The Vistas Summerlin?
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-body">
                Experience a perfect blend of luxury, convenience, and vibrant community life.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">
                  <HomeIcon className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">28 Subcommunities</h3>
                <p className="text-foreground/80 leading-relaxed font-body">Find your perfect fit among unique neighborhoods, each with its own character and charm.</p>
              </div>
              
              {/* Feature Card 2 */}
              <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">
                  <School className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Top-Rated Schools</h3>
                <p className="text-foreground/80 leading-relaxed font-body">Access to some of the best public and private schools, ensuring excellence in education.</p>
              </div>
              
              {/* Feature Card 3 */}
              <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">
                  <Trees className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Parks & Recreation</h3>
                <p className="text-foreground/80 leading-relaxed font-body">Enjoy abundant outdoor spaces, community pools, and modern recreational facilities.</p>
              </div>
              
              {/* Feature Card 4 */}
              <div className="group text-center p-8 bg-secondary rounded-2xl shadow-sm hover:shadow-xl border border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">
                  <UserCheck className="h-12 w-12 text-accent mx-auto transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-heading">Expert Local Insights</h3>
                <p className="text-foreground/80 leading-relaxed font-body">Leverage our deep market knowledge and get trusted advice from real estate professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Community Spotlight Section */}
      <AnimatedSection className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 font-heading">
                Community Spotlight
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-body">
                Get to know the unique character of our featured communities.
              </p>
            </div>
            <Suspense fallback={<LoadingSection />}>
              <CommunitySpotlight />
            </Suspense>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Listings Section */}
      <AnimatedSection id="featured-listings" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading">
                Featured Listings
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-body">
                Discover some of the most sought-after homes in The Vistas Summerlin.
              </p>
            </div>
            <div className="max-w-7xl mx-auto">
              <Suspense fallback={<LoadingSection />}>
                <RealScoutOfficeListings />
              </Suspense>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <Suspense fallback={<LoadingSection />}>
              <Testimonials />
            </Suspense>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 font-heading">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-body">
              Let our expert team guide you through every step of your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/search"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-foreground focus:ring-offset-2 focus:ring-offset-primary"
              >
                Start Searching
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground font-bold py-4 px-10 rounded-full text-lg border-2 border-primary-foreground hover:border-primary-foreground/80 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-12 mt-0">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Links/Legal */}
          <div>
            <div className="mb-6 flex flex-wrap gap-4 text-sm font-semibold">
              <a href="/search" className="hover:text-red-500">Find a Home</a>
              <a href="/about" className="hover:text-red-500">Life &amp; Culture</a>
              <a href="/events" className="hover:text-red-500">Things to Do</a>
              <a href="/communities" className="hover:text-red-500">Downtown Summerlin</a>
              <a href="/commercial" className="hover:text-red-500">Commercial</a>
              <a href="/map" className="hover:text-red-500">Maps</a>
            </div>
            <div className="text-xs text-gray-400 leading-relaxed">
              &copy; {new Date().getFullYear()} Summerlin. All rights reserved. <br />
              This is a demo site. All content is for illustrative purposes only.<br />
              <a href="/privacy" className="underline hover:text-red-500">Privacy Policy</a> | <a href="/terms" className="underline hover:text-red-500">Terms of Service</a>
            </div>
          </div>
          {/* Right: Social/Signup */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-4 mb-2">
              <a href="#" aria-label="LinkedIn" className="hover:text-red-500"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
              <a href="#" aria-label="Facebook" className="hover:text-red-500"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg></a>
              <a href="#" aria-label="Instagram" className="hover:text-red-500"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.584-.069 4.85c-.062 1.367-.334 2.634-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.367-.062-2.634-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.011-3.585.069-4.851c.062-1.367.334-2.634 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">Sign Up Now</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
