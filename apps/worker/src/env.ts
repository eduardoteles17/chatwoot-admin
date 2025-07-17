import {createEnv} from "@t3-oss/env-core";
import {z} from "zod";

export const env = createEnv({
  server: {
    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", 'silent']).default("info"),

    REDIS_HOST: z.string().default("localhost"),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_PASSWORD: z.string().optional()
  },
  runtimeEnv: {
    LOG_LEVEL: process.env.LOG_LEVEL,

    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  }
})
