import { appRouter } from "@chatwoot-admin/app/server/router";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: appRouter,
});
