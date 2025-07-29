import { env } from "@chatwoot-admin/app/env";
import { PrismaClient } from "@chatwoot-admin/db";

export const db = new PrismaClient({
  datasourceUrl: env.DATABASE_URL,
});
