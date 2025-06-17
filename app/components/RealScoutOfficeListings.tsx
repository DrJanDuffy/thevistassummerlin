import React, { useEffect, useRef } from "react";

interface RealScoutOfficeListingsProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string | number;
  priceMax?: string | number;
  [key: string]: any;
}

export default function RealScoutOfficeListings({
  agentEncodedId,
  sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
  listingStatus = "For Sale",
  propertyTypes = "SFR,MF,TC,MOBILE",
  priceMin = "500000",
  priceMax = "4000000",
  ...rest
}: RealScoutOfficeListingsProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("agent-encoded-id", agentEncodedId);
      ref.current.setAttribute("sort-order", sortOrder);
      ref.current.setAttribute("listing-status", listingStatus);
      ref.current.setAttribute("property-types", propertyTypes);
      ref.current.setAttribute("price-min", String(priceMin));
      ref.current.setAttribute("price-max", String(priceMax));
      // Set any additional props as attributes
      Object.entries(rest).forEach(([key, value]) => {
        if (typeof value !== "undefined") {
          ref.current!.setAttribute(key.replace(/[A-Z]/g, m => "-" + m.toLowerCase()), String(value));
        }
      });
    }
  }, [agentEncodedId, sortOrder, listingStatus, propertyTypes, priceMin, priceMax, rest]);

  return (
    <>
      {React.createElement('realscout-office-listings', { ref })}
      <noscript>
        <div style={{ color: 'red' }}>
          RealScout widgets require JavaScript to be enabled.
        </div>
      </noscript>
    </>
  );
} 