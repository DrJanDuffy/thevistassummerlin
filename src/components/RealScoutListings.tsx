import React from 'react';

interface RealScoutListingsProps {
  officeId: string;
  marketId: string;
  responsive?: boolean;
  errorFallback?: React.ReactNode;
}

const RealScoutListings: React.FC<RealScoutListingsProps> = ({
  officeId,
  marketId,
  responsive = true,
  errorFallback = <div>Property listings temporarily unavailable</div>
}) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <>{errorFallback}</>;
  }

  return (
    <div className={`real-estate-listings ${responsive ? 'responsive' : ''}`}>
      <iframe
        src={`https://widget.realscout.com/office/${officeId}/market/${marketId}`}
        title="Las Vegas Real Estate Listings"
        width="100%"
        height="600"
        frameBorder="0"
        loading="lazy"
        onError={() => setHasError(true)}
        style={{
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
};

export default RealScoutListings;