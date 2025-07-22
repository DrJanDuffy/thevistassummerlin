"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";

export function StatsForChangelog() {
  const stats = [
    {
      title: "July 2025",
      content: (
        <div className="flex flex-col">
          <h2 className="mt-8 text-xl font-bold text-neutral-600 md:text-3xl dark:text-neutral-300">
            Launched Modern Website Platform
          </h2>
          <p className="mb-8 mt-4 text-neutral-600 dark:text-neutral-300">
            Completely redesigned website with Next.js 14, modern design system, and enhanced RealScout integration. 
            Improved performance by 40% and mobile experience optimization.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000&h=1200&fit=crop&crop=center"
            height="2000"
            width="2000"
            className="w-full rounded-xl object-cover object-left-top md:rounded-3xl"
            alt="Modern real estate website platform"
            fetchPriority="high"
          />
        </div>
      ),
    },
    {
      title: "June 2025",
      content: (
        <div className="flex flex-col">
          <h2 className="mt-8 text-xl font-bold text-neutral-600 md:text-3xl dark:text-neutral-300">
            Market Analysis Dashboard
          </h2>
          <p className="mb-8 mt-4 text-neutral-600 dark:text-neutral-300">
            Implemented comprehensive market analysis tools with real-time data visualization. 
            Added property comparison features and neighborhood insights for better decision making.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&h=1200&fit=crop&crop=center"
            height="2000"
            width="2000"
            className="w-full rounded-xl object-cover object-left-top md:rounded-3xl"
            alt="Market analysis dashboard"
            fetchPriority="high"
          />
        </div>
      ),
    },
    {
      title: "May 2025",
      content: (
        <div className="flex flex-col">
          <h2 className="mt-8 text-xl font-bold text-neutral-600 md:text-3xl dark:text-neutral-300">
            Enhanced Community Showcase
          </h2>
          <p className="mb-8 mt-4 text-neutral-600 dark:text-neutral-300">
            Redesigned community pages with interactive maps, virtual tours, and detailed amenities. 
            Added 28 subcommunity profiles with high-quality photography and drone footage.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2000&h=1200&fit=crop&crop=center"
            height="2000"
            width="2000"
            className="w-full rounded-xl object-cover object-left-top md:rounded-3xl"
            alt="Community showcase enhancement"
            fetchPriority="high"
          />
        </div>
      ),
    },
    {
      title: "April 2025",
      content: (
        <div className="flex flex-col">
          <h2 className="mt-8 text-xl font-bold text-neutral-600 md:text-3xl dark:text-neutral-300">
            RealScout Integration Launch
          </h2>
          <p className="mb-8 mt-4 text-neutral-600 dark:text-neutral-300">
            Integrated RealScout widgets for home valuation, advanced search, and office listings. 
            Customized styling to match design system and improved user experience.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000&h=1200&fit=crop&crop=center"
            height="2000"
            width="2000"
            className="w-full rounded-xl object-cover object-left-top md:rounded-3xl"
            alt="RealScout integration launch"
            fetchPriority="high"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <StatsForChangelogDesktop stats={stats} />
      <StatsForChangelogMobile stats={stats} />
    </div>
  );
}

type Stats = { title: string; content: React.ReactNode };

export const StatsForChangelogMobile = ({ stats }: { stats: Stats[] }) => {
  return (
    <div className="mx-auto block w-full max-w-7xl px-4 md:px-8 lg:hidden">
      {stats.map((stat, index) => (
        <div
          className="mb-10 flex flex-col gap-4"
          key={`stat-tab-mobile-${index}`}
        >
          <div
            className={cn(
              "flex items-center rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
            )}
          >
            <span className="mr-4 flex-shrink-0 font-medium text-neutral-700 dark:text-neutral-100">
              {stat.title}
            </span>
            <div className="flex w-full items-center gap-2">
              <div className="h-1 w-1 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
              <div className="h-px w-full bg-neutral-300 dark:bg-neutral-700"></div>
              <div className="h-1 w-1 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            </div>
          </div>
          {stat.content}
        </div>
      ))}
    </div>
  );
};

export const StatsForChangelogDesktop = ({ stats }: { stats: Stats[] }) => {
  const [active, setActive] = useState(stats[0]);
  const direction = useMotionValue(0);

  const isActive = (stat: (typeof stats)[number]) =>
    stat.title === active.title;

  const handleSetActive = (stat: (typeof stats)[number]) => {
    const currentIndex = stats.findIndex((s) => s.title === active.title);
    const newIndex = stats.findIndex((s) => s.title === stat.title);
    direction.set(newIndex > currentIndex ? 1 : -1);
    setActive(stat);
  };

  return (
    <div className="mx-auto hidden w-full max-w-7xl px-4 md:px-8 lg:block">
      <div className="grid w-full grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <button
            key={`stat-tab-${index}`}
            onClick={() => handleSetActive(stat)}
            className={cn(
              "flex items-center rounded-2xl p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800",

              isActive(stat) ? "bg-neutral-100 dark:bg-neutral-800" : ""
            )}
          >
            <span className="mr-4 flex-shrink-0 font-medium text-neutral-700 dark:text-neutral-100">
              {stat.title}
            </span>
            <div className="flex w-full items-center gap-2">
              <div className="h-1 w-1 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
              <div className="h-px w-full bg-neutral-300 dark:bg-neutral-700"></div>
              <div className="h-1 w-1 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>
            </div>
          </button>
        ))}
      </div>
      <div className="relative mt-4 w-full overflow-hidden px-10 [mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={String(active.title)}
            initial={{ x: 1000, opacity: 0 }}
            exit={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut" }}
            className="w-full"
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}; 