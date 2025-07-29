import { trpc } from "@chatwoot-admin/app/trpc";

export default async function Home() {
  const result = await trpc.chatwoot.listAccounts.query();
  return (
    <div>
      <h1>Hello World! {result}</h1>
    </div>
  );
}
