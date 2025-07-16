import {createEnv} from "@t3-oss/env-core";
import {z} from "zod";

export const queueEnv = createEnv({
  server: {
    REDIS_URL: z.url()
  },
  runtimeEnv: {
    REDIS_URL: process.env.REDIS_URL
  }
})
