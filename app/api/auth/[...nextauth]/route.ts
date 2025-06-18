import { Auth } from '@auth/core';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import Google from '@auth/core/providers/google';

export const authOptions = {
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  }),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = (req: Request) => Auth(req, authOptions);
export { handler as GET, handler as POST }; 