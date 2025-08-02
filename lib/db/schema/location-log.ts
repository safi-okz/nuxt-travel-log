import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

import { location } from "./location";

export const locationLog = sqliteTable("locatioLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  lat: real(),
  long: real(),
  locationId: int().notNull().references(() => location.id),
  createdAt: int().notNull().default(() => Date.now()),
  updatedAt: int().notNull().default(() => Date.now()).$onUpdate(() => Date.now()),
});