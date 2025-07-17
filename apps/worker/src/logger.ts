import pino from "pino"
import {env} from "@chatwoot-admin/worker/env";

export const logger = pino({
  level: env.LOG_LEVEL
})
