import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { supabase } from './supabaseClient';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getUserRole(userId: string) {
  // Assumes you have a 'profiles' table with a 'role' column
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();
  if (error) return null;
  return data?.role || null;
}
