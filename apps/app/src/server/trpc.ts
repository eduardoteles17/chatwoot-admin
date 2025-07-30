import { UserRole } from "@chatwoot-admin/models";
import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "./context";

interface Meta {
  isPublicRoute?: boolean;
  isAdminOnly?: boolean;
}

const t = initTRPC.context<Context>().meta<Meta>().create();

export const router = t.router;
export const procedure = t.procedure.use(async (opts) => {
  if (opts.meta?.isPublicRoute) {
    return opts.next(opts);
  }

  if (opts.ctx.session === null) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      cause: "Precisa estar autenticado",
    });
  }

  if (
    opts.meta?.isAdminOnly &&
    opts.ctx.session?.user?.role !== UserRole.Admin
  ) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      cause: "Permissão insuficiente",
    });
  }

  return opts.next(opts);
});
