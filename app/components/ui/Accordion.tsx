'use client';
import React from 'react';
import { useState } from 'react';

type AccordionProps = React.PropsWithChildren<{
  title: string;
}>;

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls="accordion-content"
        onClick={() => setOpen(o => !o)}
        className="w-full text-left py-3 font-bold"
      >
        {title}
      </button>
      <div
        id="accordion-content"
        hidden={!open}
        className="pl-4"
      >
        {children}
      </div>
    </div>
  );
} 