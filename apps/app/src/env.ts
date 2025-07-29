import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string(),
  },
  client: {},
  runtimeEnv: {
    AUTH_SECRET: process.env.NODE_ENV,
  },
});
