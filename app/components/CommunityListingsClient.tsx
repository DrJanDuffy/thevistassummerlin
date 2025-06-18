"use client";
import dynamic from "next/dynamic";
import React from "react";

const RealScoutOfficeListings = dynamic(() => import("./RealScoutOfficeListings"), {
  ssr: false,
  loading: () => <div className="mb-8 text-center text-gray-500">Loading listings…</div>,
});

export default function CommunityListingsClient(props: any) {
  return <RealScoutOfficeListings {...props} />;
} 