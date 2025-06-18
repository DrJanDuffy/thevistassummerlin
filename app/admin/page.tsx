import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserRole } from '../../lib/utils';
import { LeadsTable } from './LeadsTable';
import CalendlyAppointments from './CalendlyAppointments';

async function getSession() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/auth/session`, {
    headers: { Cookie: cookies().toString() },
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function AdminPage() {
  const session = await getSession();
  if (!session?.user) {
    redirect('/');
  }
  const role = await getUserRole(session.user.id);
  if (role !== 'admin') {
    redirect('/');
  }
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p className="mb-8">Welcome, {session.user.name || session.user.email}!</p>
      <CalendlyAppointments />
      <div className="bg-white rounded-lg shadow-widget p-6 mb-8">
        <p className="text-gray-500 mb-2">Leads</p>
        <LeadsTable />
      </div>
      <div className="bg-white rounded-lg shadow-widget p-6">
        {/* Admin features will go here */}
        <p className="text-gray-500">(Admin features coming soon...)</p>
      </div>
    </main>
  );
} 