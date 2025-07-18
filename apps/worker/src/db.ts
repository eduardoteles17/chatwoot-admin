import {drizzle} from "drizzle-orm/node-postgres"
import {env} from "@chatwoot-admin/worker/env";

export const db = drizzle(env.DATABASE_URL)
