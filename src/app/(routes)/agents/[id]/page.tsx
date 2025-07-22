import { CalendlyButton } from '../../components/CalendlyButton';

export default function AgentProfilePage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-2">Dr. Jan Duffy REALTOR®</h1>
      <p className="mb-6 text-lg text-gray-700">Berkshire Hathaway HomeServices / SkyeCanyon</p>
      {/* Add agent photo, bio, contact info here if desired */}
      <div className="mb-8">
        <CalendlyButton url="https://calendly.com/drjanduffy/showing" />
      </div>
    </main>
  );
} 