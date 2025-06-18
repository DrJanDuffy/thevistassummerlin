import React from 'react';

async function fetchCalendlyEvents() {
  const res = await fetch('https://api.calendly.com/scheduled_events', {
    headers: {
      Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch Calendly events');
  const data = await res.json();
  return data.collection || [];
}

export default async function CalendlyAppointments() {
  let events: any[] = [];
  let error = null;
  try {
    events = await fetchCalendlyEvents();
  } catch (e) {
    error = e;
  }
  if (error) return <div className="text-red-500">Error loading appointments.</div>;
  if (!events.length) return <div>No upcoming appointments.</div>;
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Upcoming Appointments</h2>
      <ul className="divide-y">
        {events.map((event) => (
          <li key={event.uri} className="py-2">
            <div className="font-medium">{event.name}</div>
            <div className="text-sm text-gray-500">{new Date(event.start_time).toLocaleString()}</div>
            <div className="text-sm text-gray-500">Invitee: {event.invitee_email || 'N/A'}</div>
          </li>
        ))}
      </ul>
    </div>
  );
} 