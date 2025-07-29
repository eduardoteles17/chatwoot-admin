import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@chatwoot-admin/app/db";
import { env } from "@chatwoot-admin/app/env";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  providers: [],
});
