import { env } from "@chatwoot-admin/worker/env";
import { Redis } from "ioredis";

export const redis = new Redis(env.REDIS_URL);
