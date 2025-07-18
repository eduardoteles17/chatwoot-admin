import {
  boolean,
  pgSchema,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { v7 as uuidV7 } from "uuid";

const appSchema = pgSchema("app");

export const users = appSchema.table("users", {
  id: uuid("id")
    .primaryKey()
    .$defaultFn(() => uuidV7()),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  emailVerified: boolean().default(false).notNull(),
  updatedAt: timestamp()
    .$defaultFn(() => new Date())
    .notNull(),
});
