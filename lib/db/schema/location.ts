import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real(),
  long: real(),
  userId: int().notNull().references(() => user.id),
  createdAt: int().notNull().default(() => Date.now()),
  updatedAt: int().notNull().default(() => Date.now()).$onUpdate(() => Date.now()),
});
