import { auth } from "@chatwoot-admin/app/auth";
import { createContext } from "@chatwoot-admin/app/server/context";
import { appRouter } from "@chatwoot-admin/app/server/router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = auth((req) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createContext({
      session: req.auth,
    }),
  });
});

export { handler as GET, handler as POST };
