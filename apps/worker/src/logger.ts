import { env } from "@chatwoot-admin/worker/env";
import pino from "pino";

export const logger = pino({
  level: env.LOG_LEVEL,
});
