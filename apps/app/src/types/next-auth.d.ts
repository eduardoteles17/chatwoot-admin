import type { User as DefaultUser } from "@chatwoot-admin/models";
import type { DefaultSession } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
  }

  interface User extends DefaultUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role?: string;
  }
}
