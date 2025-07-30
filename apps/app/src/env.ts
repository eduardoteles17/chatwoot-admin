import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string(),

    DATABASE_URL: z.url(),

    OAUTH_SCOPE: z.string().min(1).optional().default("openid profile email"),
    OAUTH_CLIENT_ID: z.string().min(1),
    OAUTH_CLIENT_SECRET: z.string().min(1),
    OAUTH_WELL_KNOWN_URL: z.url(),
    OAUTH_ISSUER: z.preprocess((val) => {
      if (!val) {
        return process.env.OAUTH_WELL_KNOWN_URL?.split("/.well-known")[0];
      }

      return val;
    }, z.url().optional()),
    OAUTH_USER_ID_PATH: z.string().min(1).optional().default("id"),
    OAUTH_USER_NAME_PATH: z.string().min(1).optional().default("name"),
    OAUTH_USER_EMAIL_PATH: z.string().min(1).optional().default("email"),
    OAUTH_USER_IMAGE_PATH: z.string().min(1).optional().default("image"),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
  },
  runtimeEnv: {
    AUTH_SECRET: process.env.NODE_ENV,

    DATABASE_URL: process.env.DATABASE_URL,

    OAUTH_SCOPE: process.env.OAUTH_SCOPE,
    OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
    OAUTH_WELL_KNOWN_URL: process.env.OAUTH_WELL_KNOWN_URL,
    OAUTH_ISSUER: process.env.OAUTH_ISSUER,
    OAUTH_USER_ID_PATH: process.env.OAUTH_USER_ID_PATH,
    OAUTH_USER_NAME_PATH: process.env.OAUTH_USER_NAME_PATH,
    OAUTH_USER_EMAIL_PATH: process.env.OAUTH_USER_EMAIL_PATH,
    OAUTH_USER_IMAGE_PATH: process.env.OAUTH_USER_IMAGE_PATH,

    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },
});
