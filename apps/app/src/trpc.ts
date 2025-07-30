import { env } from "@chatwoot-admin/app/env";
import type { AppRouter } from "@chatwoot-admin/app/server/router";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { headers } from "next/headers";

function getLinkProvider() {
  if (typeof window !== "undefined") {
    return httpBatchLink({
      url: "/api/trpc",
    });
  }

  return httpBatchLink({
    url: `${env.NEXT_PUBLIC_APP_URL}/api/trpc`,
    async headers() {
      return await headers();
    },
  });
}

export const trpc = createTRPCClient<AppRouter>({
  links: [getLinkProvider()],
});
