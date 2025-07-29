import { publicProcedure, router } from "@chatwoot-admin/app/server/trpc";

export const chatwootRoutes = router({
  listAccounts: publicProcedure.query(() => 1),
});
