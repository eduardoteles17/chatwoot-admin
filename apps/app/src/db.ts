import { env } from "@chatwoot-admin/app/env";
import { PrismaClient } from "@chatwoot-admin/db";

let db: PrismaClient;

if (typeof window === "undefined") {
  db = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
  });
}

export { db };
