import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { Session } from "next-auth";

export type CreateContextProps = {
  session: Session | null;
};

export function createContext(props: CreateContextProps) {
  return (opts: FetchCreateContextFnOptions) => {
    return {
      session: props.session,
    };
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
