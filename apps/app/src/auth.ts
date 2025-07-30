import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@chatwoot-admin/app/db";
import { env } from "@chatwoot-admin/app/env";
import type { User, UserRole } from "@chatwoot-admin/models";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    signOut: "auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.sub as string;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
  providers: [
    {
      id: "oauth",
      name: "OAuth",
      type: "oidc",
      authorization: {
        params: {
          scope: env.OAUTH_SCOPE,
        },
      },
      clientId: env.OAUTH_CLIENT_ID,
      clientSecret: env.OAUTH_CLIENT_SECRET,
      wellKnown: env.OAUTH_WELL_KNOWN_URL,
      issuer: env.OAUTH_ISSUER,
      checks: ["pkce", "state"],
      idToken: true,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        } as unknown as User;
      },
    },
  ],
});
