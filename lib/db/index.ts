import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

import env from '~/lib/env.ts';
import * as schema from './lib/db/schema/index.ts';

// You can specify any property from the libsql connection options
const db = drizzle({ 
  connection: { 
    url: env.TURSO_DATABASE_URL, 
    authToken: env.NODE_ENV === 'development' ? undefined : env.TURSO_AUTH_TOKEN,
  },
  casing: 'snake_case', // Optional: Use snake_case for column names
  schema
});

export default db;
