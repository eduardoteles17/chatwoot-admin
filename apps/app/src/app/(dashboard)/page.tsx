import { trpc } from "@chatwoot-admin/app/trpc";

export default async function Home() {
  const result = await trpc.chatwoot.listAccounts.query();
  return (
    <div>
      <h1>Hello World! {JSON.stringify(result)}</h1>
    </div>
  );
}
