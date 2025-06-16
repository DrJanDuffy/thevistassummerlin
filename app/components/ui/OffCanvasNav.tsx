'use client';
import React, { useState, useRef, useEffect } from 'react';

type NavLink = { href: string; label: string };

type OffCanvasNavProps = {
  links: NavLink[];
};

export function OffCanvasNav({ links }: OffCanvasNavProps) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) drawerRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        aria-label="Open navigation"
        onClick={() => setOpen(true)}
        className="p-3"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
      </button>
      {open && (
        <div
          ref={drawerRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 flex"
          onClick={() => setOpen(false)}
        >
          <nav
            className="bg-white w-64 h-full p-6"
            onClick={e => e.stopPropagation()}
          >
            <button
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="mb-4"
            >✕</button>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block py-2">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
} 