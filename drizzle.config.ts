import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

import env from '~/lib/env.ts';

export default defineConfig({
  out: './lib/db/migrations',
  schema: './lib/db/schema/index.ts',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
});
