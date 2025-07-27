import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

import env from '~/lib/env.ts';
import * as schema from './schema/index.ts';

// You can specify any property from the libsql connection options
const db = drizzle({ 
  connection: { 
    url: env.TURSO_DATABASE_URL, 
    authToken: env.TURSO_AUTH_TOKEN
  },
  schema
});

export default db;
