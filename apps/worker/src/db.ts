import { PrismaClient } from "@chatwoot-admin/db";
import { env } from "@chatwoot-admin/worker/env";

export const db = new PrismaClient({
  datasourceUrl: env.DATABASE_URL,
});
