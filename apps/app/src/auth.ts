import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@chatwoot-admin/app/db";
import { env } from "@chatwoot-admin/app/env";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/login",
    signOut: "auth/login",
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
        };
      },
    },
  ],
});
