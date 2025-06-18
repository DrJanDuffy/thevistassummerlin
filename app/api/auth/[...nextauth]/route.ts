import { Auth } from '@auth/core';
import { authOptions } from './authOptions';

const handler = (req: Request) => Auth(req, authOptions);
export { handler as GET, handler as POST }; 