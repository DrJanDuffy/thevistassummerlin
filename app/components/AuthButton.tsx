'use client';
import { useEffect, useState } from 'react';

export function AuthButton() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch session info from Auth.js API
    async function fetchSession() {
      setLoading(true);
      const res = await fetch('/api/auth/session');
      const data = await res.json();
      setUser(data?.user || null);
      setLoading(false);
    }
    fetchSession();
  }, []);

  const handleLogin = () => {
    window.location.href = '/api/auth/signin/google';
  };

  const handleLogout = () => {
    window.location.href = '/api/auth/signout';
  };

  if (loading) return <button className="btn" disabled>Loading...</button>;

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <img src={user.image} alt="avatar" className="w-8 h-8 rounded-full" />
        <span className="font-medium">{user.name || user.email}</span>
        <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <button className="btn btn-primary" onClick={handleLogin}>
      Sign in with Google
    </button>
  );
} 