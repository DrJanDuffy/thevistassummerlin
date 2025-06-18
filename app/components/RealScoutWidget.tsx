'use client';
import { useEffect, useRef } from 'react';

const REALSCOUT_SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
const AGENT_ID = 'QWdlbnQtMjI1MDUw';

export function RealScoutWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject the script if it hasn't been added yet
    if (!document.querySelector(`script[src="${REALSCOUT_SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = REALSCOUT_SCRIPT_SRC;
      script.type = 'module';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="w-full flex justify-center bg-white rounded-lg shadow-widget overflow-hidden"
      style={{ minHeight: 600 }}
    >
      <realscout-advanced-search
        agent-encoded-id={AGENT_ID}
        style={{
          '--rs-as-button-text-color': '#ffffff',
          '--rs-as-background-color': '#ffffff',
          '--rs-as-button-color': 'rgb(35, 93, 137)',
          '--rs-as-widget-width': '500px',
        } as React.CSSProperties}
      />
    </div>
  );
} 