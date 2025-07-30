import { db } from "@chatwoot-admin/app/db";
import { procedure, router } from "@chatwoot-admin/app/server/trpc";

export const chatwootRoutes = router({
  listAccounts: procedure
    .meta({
      isPublicRoute: false,
      isAdminOnly: true,
    })
    .query(() => db.chatwootAccount.findMany()),
});
