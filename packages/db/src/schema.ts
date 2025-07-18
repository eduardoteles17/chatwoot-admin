import {v7 as uuidV7} from "uuid"
import {uuid, pgTable, varchar, boolean, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().$defaultFn(() => uuidV7()),
  name: varchar({length: 255}).notNull(),
  email: varchar({length: 255}).notNull().unique(),
  emailVerified: boolean().default(false).notNull(),
  updatedAt: timestamp().$defaultFn(()=>new Date()).notNull(),
})
