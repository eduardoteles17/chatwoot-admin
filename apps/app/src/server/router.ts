import { chatwootRoutes } from "@chatwoot-admin/app/server/routes/chatwoot";
import { router } from "./trpc";

export const appRouter = router({
  chatwoot: chatwootRoutes,
});

export type AppRouter = typeof appRouter;
