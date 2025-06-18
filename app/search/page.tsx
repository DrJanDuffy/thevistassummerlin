import { RealScoutWidget } from '../components/RealScoutWidget';

export default function SearchPage() {
  return (
    <main className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Property Search</h1>
      <RealScoutWidget widgetUrl="https://your-realscout-widget-url.com" />
    </main>
  );
} 