import { db } from "@chatwoot-admin/worker/db";

async function main() {
  console.log(await db.$connect());
}

main();
